provider "aws" {
  alias = "localstack"
  region = "us-east-1"
  skip_credentials_validation = true
  skip_metadata_api_check = true
  skip_requesting_account_id = true

  endpoints {
    dynamodb = "http://localhost:4566" # use the localstack endpoint
  }
}

resource "aws_dynamodb_table" "order_table" {
  provider = aws.localstack  # use the localstack provider
  name           = "order"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "orderId"
  range_key      = "date"
  attribute {
    name = "orderId"
    type = "S"
  }
  attribute {
    name = "date"
    type = "S"
  }
}

resource "aws_dynamodb_table" "user_table" {
  provider = aws.localstack  # use the localstack provider
  name           = "user"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "userId"
  range_key      = "date"
  attribute {
    name = "userId"
    type = "S"
  }
  attribute {
    name = "date"
    type = "S"
  }

}

resource "null_resource" "update_local_dynamodb_table" {
  depends_on = [aws_dynamodb_table.order_table, aws_dynamodb_table.user_table]
  provisioner "local-exec" {
    command = "npx tsx ./data/update.ts"
  }
  triggers = {
    always_run = timestamp()
  }
}

