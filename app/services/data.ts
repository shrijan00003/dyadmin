"use server";

import {
  DescribeTableCommand,
  DynamoDBClient,
  ListTablesCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import env from "./env";

function getClient() {
  console.count("DB_CONNECTION");
  const client = new DynamoDBClient({
    endpoint: env("DYNAMODB_ENDPOINT"),
    region: "us-east-1",
    credentials: {
      accessKeyId: "dummy",
      secretAccessKey: "dummy",
    },
  });
  const ddb = DynamoDBDocumentClient.from(client);
  return ddb;
}

export async function getOrders() {
  const client = getClient();
  const command = new GetCommand({
    TableName: "order",
    Key: {
      orderId: "ORDER-1",
    },
  });

  const data = await client.send(command);

  return data;
}

export async function scanAllItems(tableName?: string) {
  if (!tableName) {
    return [];
  }
  const client = getClient();
  const command = new ScanCommand({
    TableName: "order",
  });
  const data = await client.send(command);

  return data;
}

export async function getTableMetaData() {
  const client = getClient();
  const command = new DescribeTableCommand({
    TableName: "order",
  });

  const data = await client.send(command);
  return data;
}

export async function listTables() {
  const client = getClient();
  const command = new ListTablesCommand({});

  const data = await client.send(command);

  return data;
}
