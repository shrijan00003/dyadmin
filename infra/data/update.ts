import { exec } from "child_process";

function updateLocalDynamodbTable() {
  console.log("[order table] update local dynamodb table");
  exec(
    "awslocal dynamodb batch-write-item --request-items file://data/orders.json",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  console.log("[user table] update local dynamodb table");
  exec(
    "awslocal dynamodb batch-write-item --request-items file://data/users.json",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
}

updateLocalDynamodbTable();
