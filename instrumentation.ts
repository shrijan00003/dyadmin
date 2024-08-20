export function register() {
  console.log("Instrumentation registered");
  process.env.DYNAMODB_ENDPOINT = "http://0.0.0.0:456688";
}
