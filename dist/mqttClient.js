"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMqttClient = createMqttClient;
const mqtt_1 = require("mqtt");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const host = process.env.MQTT_BROKER_HOST || "localhost";
const port = parseInt(process.env.MQTT_BROKER_PORT || "1883", 10);
const MQTT_BROKER_URL = `mqtt://${host}:${port}`;
function createMqttClient(clientName = "mqtt-client") {
    const client = (0, mqtt_1.connect)(MQTT_BROKER_URL, {
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
//# sourceMappingURL=mqttClient.js.map