"use server";

import {
  DescribeTableCommand,
  DynamoDBClient,
  ListTablesCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  endpoint: "http://0.0.0.0:4566",
  region: "us-east-1",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
});
const ddb = DynamoDBDocumentClient.from(client);

export async function getOrders() {
  const command = new GetCommand({
    TableName: "order",
    Key: {
      orderId: "ORDER-1",
    },
  });

  const data = await ddb.send(command);

  return data;
}

export async function scanAllItems() {
  const command = new ScanCommand({
    TableName: "order",
  });
  const data = await ddb.send(command);

  return data;
}

export async function getTableMetaData() {
  const command = new DescribeTableCommand({
    TableName: "order",
  });

  const data = await ddb.send(command);
  console.log(data);
  return data;
}

export async function listTables() {
  const command = new ListTablesCommand({});

  const data = await ddb.send(command);

  return data;
}
