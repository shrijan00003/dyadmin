import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const environments = {
  DYNAMODB_ENDPOINT: publicRuntimeConfig.DYNAMODB_ENDPOINT,
};

function getEnv(key: keyof typeof environments) {
  const value = environments[key];

  if (!value) {
    console.error(`Missing environment variable: ${key}`);
  }
  return value;
}

export default getEnv;
