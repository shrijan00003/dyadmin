import { expect, test } from "vitest";
import { formatDynamodbValue } from "./utils";

test("util", () => {
  console.info(`[Testing] formatDynamodbValue`);
  // String
  const strValue = formatDynamodbValue({ S: "test" });
  expect(strValue).toBe("test");
  // Number
  const numValue = formatDynamodbValue({ N: "123" });
  expect(numValue).toBe(123);
  // Boolean
  const boolValue = formatDynamodbValue({ BOOL: true });
  expect(boolValue).toBe(true);
  // Null
  const nullValue = formatDynamodbValue({ NULL: true });
  expect(nullValue).toBe(null);
  // List
  const listValue = formatDynamodbValue({ L: [{ S: "test" }] });
  expect(listValue).toEqual(["test"]);
  // Map
  const mapValue = formatDynamodbValue({ M: { test: { S: "value" } } });
  expect(mapValue).toEqual({ test: "value" });
  // Nested
  const nestedValue = formatDynamodbValue({
    L: [
      { S: "test" },
      { N: "123" },
      { BOOL: true },
      { NULL: true },
      {
        M: {
          test: { S: "value" },
        },
      },
    ],
  });
  expect(nestedValue).toEqual(["test", 123, true, null, { test: "value" }]);
});
