"use server";

import {
  DescribeTableCommand,
  DescribeTableCommandOutput,
  DynamoDBClient,
  ListTablesCommand,
  ScanCommand,
  ScanCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import env from "./env";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

export async function updateTableURL(tableName: string) {
  revalidatePath("/");
  return redirect("/?table=" + tableName);
}

export async function scanAllItems(tableName?: string) {
  if (!tableName) {
    return {} as ScanCommandOutput;
  }
  const client = getClient();
  const command = new ScanCommand({
    TableName: tableName,
  });
  const data = await client.send(command);

  return data;
}

export async function getTableMetaData(tableName?: string) {
  if (!tableName) {
    return {} as DescribeTableCommandOutput;
  }
  const client = getClient();
  const command = new DescribeTableCommand({
    TableName: tableName,
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
