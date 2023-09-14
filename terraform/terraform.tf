terraform {
  backend "s3" {
    bucket = "master-shifu-bucket-tfs"
    key    = "infra.tfstate"
    region = "eu-west-2"
  }
}