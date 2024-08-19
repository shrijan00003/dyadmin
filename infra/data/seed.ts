import { exec } from "child_process";
import { writeFile } from "fs/promises";
import path from "path";

function randomDate(): string {
  const now = new Date();
  const pastYear = new Date(
    now.getFullYear() - 1,
    now.getMonth(),
    now.getDate()
  );
  const randomDate = new Date(
    pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime())
  );
  return randomDate.toISOString().split("T")[0];
}

// Function to generate random order data
function generateOrderData() {
  return {
    PutRequest: {
      Item: {
        orderId: {
          S: crypto.randomUUID(),
        },
        date: {
          S: randomDate(),
        },
        customerName: {
          S: `Customer ${Math.floor(Math.random() * 1000)}`,
        },
        totalAmount: {
          N: (Math.random() * 1000).toFixed(2),
        },
        status: {
          S: ["Pending", "Shipped", "Delivered"][Math.floor(Math.random() * 3)],
        },
        items: {
          L: [
            {
              M: {
                productId: {
                  S: `PROD-${Math.floor(Math.random() * 10000)}`,
                },
                quantity: {
                  N: `${Math.floor(Math.random() * 10) + 1}`,
                },
                price: {
                  N: (Math.random() * 100).toFixed(2),
                },
              },
            },
          ],
        },
      },
    },
  };
}

function generateUserData() {
  return {
    PutRequest: {
      Item: {
        userId: {
          S: crypto.randomUUID(),
        },
        date: {
          S: randomDate(),
        },
        firstName: {
          S: `FirstName ${Math.floor(Math.random() * 1000)}`,
        },
        lastName: {
          S: `LastName ${Math.floor(Math.random() * 1000)}`,
        },
        email: {
          S: `email-${Math.floor(Math.random() * 1000)}@example.com`,
        },
      },
    },
  };
}

function createOrder(len = 25) {
  const ordersData = [];
  for (let i = 0; i < len; i++) {
    ordersData.push(generateOrderData());
  }

  const orders = {
    order: ordersData,
  };

  writeFile(path.join(__dirname, "orders.json"), JSON.stringify(orders));
}

function createUser(len = 25) {
  const usersData = [];
  for (let i = 0; i < len; i++) {
    usersData.push(generateUserData());
  }

  const users = {
    user: usersData,
  };

  writeFile(path.join(__dirname, "users.json"), JSON.stringify(users));
}

createOrder(25);
createUser(25);
