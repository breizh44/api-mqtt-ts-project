"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = require("crypto");
const mqttClient_1 = require("./mqttClient");
const dotenv_1 = __importDefault(require("dotenv"));
const bundle_1 = require("./protos/generated/bundle");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
const client = (0, mqttClient_1.createMqttClient)("server");
const pendingResponses = new Map();
client.on("connect", () => {
    client.subscribe([
        "welding/start/response",
        "welding/stop/response",
        "wp/+/response",
        "/measure/current",
    ]);
});
client.on("message", (topic, payload, packet) => {
    if (topic === "/measure/current") {
        try {
            // Décoder le message Protobuf
            const measure = bundle_1.Measure.decode(payload);
            const value = measure.value.toFixed(2);
            const timestampRaw = measure.header?.timestamp;
            let dateStr = "timestamp non défini";
            if (timestampRaw &&
                typeof timestampRaw === "object" &&
                typeof timestampRaw.toNumber === "function") {
                const timestamp = timestampRaw.toNumber();
                dateStr = new Date(timestamp).toLocaleString("fr-FR");
            }
            // Afficher les valeurs reçues
            console.log(`📏 Mesure reçue : ${value} A à ${dateStr}`);
        }
        catch (err) {
            console.error("Erreur de décodage du message Protobuf : ", err);
        }
    }
    // if (topic === "/measure/current") {
    //   console.log("📏 Mesure reçue :", msg);
    //   return;
    // }
    const msg = payload.toString();
    const correlationData = packet.properties?.correlationData?.toString("hex");
    if (!correlationData)
        return;
    const handler = pendingResponses.get(correlationData);
    if (handler) {
        handler(msg);
        console.log(`📨 Réponse reçue sur ${topic}:`, msg);
        pendingResponses.delete(correlationData);
    }
});
function sendMqttRequest(topic, responseTopic, payload) {
    const correlationId = (0, crypto_1.randomUUID)().replace(/-/g, "");
    const options = {
        qos: 1,
        properties: {
            responseTopic,
            correlationData: Buffer.from(correlationId, "hex"),
        },
    };
    return new Promise((resolve, reject) => {
        pendingResponses.set(correlationId, resolve);
        client.publish(topic, JSON.stringify(payload), options);
        setTimeout(() => {
            pendingResponses.delete(correlationId);
            reject(new Error("Timeout"));
        }, 5000);
    });
}
app.post("/welding/start", async (_, res) => {
    try {
        const result = await sendMqttRequest("welding/start/request", "welding/start/response", { command: "start" });
        res.json({ success: true, response: result });
    }
    catch {
        res.status(504).json({ success: false, error: "Timeout" });
    }
});
app.post("/welding/stop", async (_, res) => {
    try {
        const result = await sendMqttRequest("welding/stop/request", "welding/stop/response", { command: "stop" });
        res.json({ success: true, response: result });
    }
    catch {
        res.status(504).json({ success: false, error: "Timeout" });
    }
});
app.delete("/wp/:wpId/delete", async (req, res) => {
    const wpId = req.params.wpId;
    try {
        const result = await sendMqttRequest(`wp/${wpId}/request`, `wp/${wpId}/response`, { action: "delete", wpId });
        res.json({ success: true, response: result });
    }
    catch {
        res.status(504).json({ success: false, error: "Timeout" });
    }
});
app.listen(PORT, () => {
    console.log(`🚀 Serveur REST en écoute sur http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map