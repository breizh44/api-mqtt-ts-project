import { connect, MqttClient } from "mqtt";
import dotenv from "dotenv";

dotenv.config();

const host = process.env.MQTT_BROKER_HOST || "localhost";
const port = parseInt(process.env.MQTT_BROKER_PORT || "1883", 10);
const MQTT_BROKER_URL = `mqtt://${host}:${port}`;

export function createMqttClient(clientName = "mqtt-client"): MqttClient {
  const client = connect(MQTT_BROKER_URL, {
    protocolVersion: 5,
    clientId: `${clientName}-${Math.random().toString(16).slice(2, 8)}`,
  });

  client.on("connect", () => {
    console.log(`✅ MQTT connecté (${clientName}) à ${MQTT_BROKER_URL}`);
  });

  client.on("error", (err) => {
    console.error(`❌ Erreur MQTT (${clientName})`, err);
  });

  return client;
}
