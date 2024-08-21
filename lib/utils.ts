import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

type TDynamoValueType = "S" | "N" | "B" | "BOOL" | "NULL" | "L" | "M";
export function formatDynamodbValue(
  value: Partial<Record<TDynamoValueType, any>>
) {
  const key = Object.keys(value)[0];
  switch (key) {
    case "S":
      return value.S;
    case "N": {
      const numberValue = Number(value.N);
      if (isNaN(numberValue)) {
        return value.N;
      }
      return numberValue;
    }
    case "B":
      return value.B;
    case "BOOL":
      return value.BOOL;
    case "NULL":
      return null;
    case "L": {
      if (!Array.isArray(value.L)) {
        console.error("Unexpected DynamoDB value type", key);
        return null;
      }
      const items: any = value.L.map((item) => formatDynamodbValue(item));
      return items;
    }
    case "M": {
      if (!value.M) {
        console.error("Unexpected DynamoDB value type", key);
        return null;
      }
      const items: any = Object.keys(value.M).reduce((acc, key) => {
        acc[key] = formatDynamodbValue(value.M[key]);
        return acc;
      }, {} as Record<string, any>);
      return items;
    }

    default: {
      console.error("Unknown DynamoDB value type", key);
      return null;
    }
  }
}
