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
    pnpm start:server
   ```
   This will start the server. The server manages the REST API as well as a websocket for displaying measurements.

### Steps to Run the Simulator

1. Open a terminal and navigate to the project directory.
2. Install the necessary dependencies by running:
   ```bash
   pnpm install
   ```
3. Run the simulator by executing:
   ```bash
    pnpm start:simulator
   ```
   This will start the simulator. The simulator simulates communication with the welding station. The simulator listens to MQTT topics and sends associated responses and periodically sends measurements via MQTT protobuf messages.

### Steps to Run the Vue.js application

1. Open a terminal and navigate to the project directory.
2. Install the necessary dependencies by running:
   ```bash
   pnpm install
   ```
3. Run the client by executing:
   ```bash
    pnpm dev
   ```
   This will start the Vue.js application. The vue.js application communicates with the server via the REST API (start and stop commands) and receives measurements (current and speed) via the websocket to display them in real time (graph and current value).
