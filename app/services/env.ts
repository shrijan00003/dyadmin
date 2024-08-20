import { loadEnvConfig } from "@next/env";
import { unstable_noStore } from "next/cache";

loadEnvConfig(process.cwd());

const environments = {
  DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,
};

function getEnv(key: keyof typeof environments) {
  unstable_noStore();
  const value = environments[key];
  console.log(`ENV: ${key}: ${value}`);

  if (!value) {
    console.error(`Missing environment variable: ${key}`);
  }
  return value;
}

export default getEnv;
