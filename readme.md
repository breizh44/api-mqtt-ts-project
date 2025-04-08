## How to Run the Server and Client (synchrone version)

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.

### Steps to Run the Server

1. Open a terminal and navigate to the project directory.
2. Install the necessary dependencies by running:
   ```bash
   pnpm install
   ```
3. Run the server by executing:
   ```bash
    pnpm ts-node src/server.ts
   ```
   This will start the server and listen for incoming messages on the "polysoude/request/topic" topic.

### Steps to Run the Client

1. Open a terminal and navigate to the project directory.
2. Install the necessary dependencies by running:
   ```bash
   pnpm install
   ```
3. Run the client by executing:
   ```bash
    pnpm ts-node src/client.ts
   ```
   This will start the client and publish a message on the "polysoude/request/topic" topic.

## Version asynchrone
