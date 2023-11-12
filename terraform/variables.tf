variable "project_id" {
  type    = string
  default = "portfolio-402319"
}

variable "region" {
  type    = string
  default = "europe-west1"
}

variable "tag" {
  type = string
}

variable "airtable_token" {
  type      = string
  sensitive = true
}

variable "airtable_base" {
  type      = string
  sensitive = true
}