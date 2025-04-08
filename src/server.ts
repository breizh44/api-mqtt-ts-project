import express from "express";
import { randomUUID } from "crypto";
import { IClientPublishOptions } from "mqtt";
import { createMqttClient } from "./mqttClient";
import dotenv from "dotenv";
import { Measure } from "./protos/generated/bundle";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

const client = createMqttClient("server");

const pendingResponses = new Map<string, (msg: string) => void>();

client.on("connect", () => {
  client.subscribe([
    "welding/start/response",
    "welding/stop/response",
    "wp/+/response",
    "/measure/current",
  ]);
});

client.on("message", (topic, payload, packet) => {
  const msg = payload.toString();
  const correlationData = packet.properties?.correlationData?.toString("hex");

  if (topic === "/measure/current") {
    try {
      // Décoder le message Protobuf
      const measure = Measure.decode(payload);
      const value = measure.value.toFixed(2);
      const timestampRaw = measure.header?.timestamp;

      let dateStr = "timestamp non défini";
      if (
        timestampRaw &&
        typeof timestampRaw === "object" &&
        typeof timestampRaw.toNumber === "function"
      ) {
        const timestamp = timestampRaw.toNumber();
        dateStr = new Date(timestamp).toLocaleString("fr-FR");
      }
      // Afficher les valeurs reçues
      console.log(`📏 Mesure reçue : ${value} A à ${dateStr}`);
    } catch (err) {
      console.error("Erreur de décodage du message Protobuf : ", err);
    }
    return;
  }

  if (!correlationData) {
    console.warn(
      `📨 Réponse MQTT sans correlationData reçue sur ${topic} ← ${msg}`
    );
    return;
  }

  const handler = pendingResponses.get(correlationData);
  if (!handler) {
    console.warn(
      `⚠️ [${correlationData}] Réponse inattendue sur ${topic} (probablement timeout)`
    );
    return;
  }

  // Appeler le gestionnaire de réponse avec le message reçu
  handler(msg);
  console.log(`📨 Réponse reçue sur ${topic}:`, msg);
  pendingResponses.delete(correlationData);
});

function sendMqttRequest(
  topic: string,
  responseTopic: string,
  payload: any,
  timeoutMs = 5000
): Promise<string> {
  const correlationId = randomUUID().replace(/-/g, "");
  const correlationHex = correlationId;
  const correlationBuffer = Buffer.from(correlationHex, "hex");

  const options: IClientPublishOptions = {
    qos: 1,
    properties: {
      responseTopic,
      correlationData: correlationBuffer,
    },
  };

  return new Promise((resolve, reject) => {
    console.log(`📤 [${correlationHex}] Envoi sur ${topic} →`, payload);

    pendingResponses.set(correlationHex, (msg: string) => {
      console.log(
        `✅ [${correlationHex}] Réponse reçue sur ${responseTopic} ←`,
        msg
      );
      resolve(msg);
    });

    client.publish(topic, JSON.stringify(payload), options);

    setTimeout(() => {
      if (pendingResponses.has(correlationHex)) {
        console.warn(`⏱️ [${correlationHex}] Timeout sur ${responseTopic}`);
        pendingResponses.delete(correlationHex);
        reject(new Error("Timeout"));
      }
    }, timeoutMs);
  });
}

app.post("/welding/start", async (_, res) => {
  try {
    const result = await sendMqttRequest(
      "welding/start/request",
      "welding/start/response",
      { command: "start" }
    );
    res.json({ success: true, response: result });
  } catch {
    res.status(504).json({ success: false, error: "Timeout" });
  }
});

app.post("/welding/stop", async (_, res) => {
  try {
    const result = await sendMqttRequest(
      "welding/stop/request",
      "welding/stop/response",
      { command: "stop" }
    );
    res.json({ success: true, response: result });
  } catch {
    res.status(504).json({ success: false, error: "Timeout" });
  }
});

app.delete("/wp/:wpId/delete", async (req, res) => {
  const wpId = req.params.wpId;
  try {
    const result = await sendMqttRequest(
      `wp/${wpId}/request`,
      `wp/${wpId}/response`,
      { action: "delete", wpId }
    );
    res.json({ success: true, response: result });
  } catch {
    res.status(504).json({ success: false, error: "Timeout" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur REST en écoute sur http://localhost:${PORT}`);
});
