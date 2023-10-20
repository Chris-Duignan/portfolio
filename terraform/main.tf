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
      "sts.googleapis.com"
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
      image = "europe-west1-docker.pkg.dev/portfolio-402319/portfolio-repo/portfolio:latest"
      resources {
        limits = {
          memory = "512Mi"
          cpu    = "1"
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
