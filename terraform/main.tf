provider "google" {
  project = var.project_id
  region  = var.region
}

terraform {
  required_version = "1.6.1"

  required_providers {
    google = {
      version = ">= 5.2.0"
      source  = "hashicorp/google"
    }
  }

  backend "gcs" {
    bucket = "portfolio-402319-tf-state"
  }
}

resource "google_project_service" "project" {
  for_each = toset(
    [
      "artifactregistry.googleapis.com",
      "run.googleapis.com",
      "cloudresourcemanager.googleapis.com",
      "iam.googleapis.com",
      "iamcredentials.googleapis.com",
      "sts.googleapis.com",
      "secretmanager.googleapis.com"
    ]
  )

  service = each.key
}

resource "google_artifact_registry_repository" "portfolio_repo" {
  repository_id = "portfolio-repo"
  location      = var.region
  format        = "DOCKER"
}

resource "google_cloud_run_v2_service" "portfolio" {
  name     = "portfolio"
  location = var.region

  template {
    service_account = google_service_account.cloud_run.email

    containers {
      image = "europe-west1-docker.pkg.dev/portfolio-402319/portfolio-repo/portfolio:${var.tag}"
      resources {
        limits = {
          memory = "512Mi"
          cpu    = "1"
        }
      }
      env {
        name = "AIRTABLE_TOKEN"
        value_source {
          secret_key_ref {
            secret = google_secret_manager_secret.airtable_token.name
          }
        }
      }
      env {
        name = "AIRTABLE_BASE"
        value_source {
          secret_key_ref {
            secret = google_secret_manager_secret.airtable_base.name
          }
        }
      }
    }
    scaling {
      max_instance_count = 2
    }

  }

}

resource "google_service_account" "cloud_run" {
  account_id = "portfolio-cloud-run"
}

resource "google_secret_manager_secret" "airtable_token" {
  secret_id = "airtable_token"

  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "airtable_token" {
  secret = google_secret_manager_secret.airtable_token.id

  secret_data = var.airtable_token
}

resource "google_secret_manager_secret" "airtable_base" {
  secret_id = "airtable_base"

  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "airtable_base" {
  secret = google_secret_manager_secret.airtable_base.id

  secret_data = var.airtable_base
}
