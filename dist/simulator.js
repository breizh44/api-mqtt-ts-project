"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mqttClient_1 = require("./mqttClient");
const dotenv_1 = __importDefault(require("dotenv"));
const bundle_1 = require("./protos/generated/bundle");
dotenv_1.default.config();
const simulator = (0, mqttClient_1.createMqttClient)("simulator");
simulator.on("connect", () => {
    simulator.subscribe([
        "welding/start/request",
        "welding/stop/request",
        "wp/+/request",
    ]);
    // Publication périodique d'une mesure
    // setInterval(() => {
    //   const value = (Math.random() * 25).toFixed(2);
    //   simulator.publish("/measure/current", value);
    //   console.log(`📤 Mesure envoyée : ${value}`);
    // }, 10_000);
    setInterval(() => {
        const timestamp = Date.now();
        const value = Math.random() * 25;
        const measure = bundle_1.Measure.create({
            header: {
                timestamp: Date.now(),
                version: "1.0.0",
            },
            value: value, // Valeur entre 0 et 25
            pulsed: bundle_1.Measure.Pulsed.CONTINUOUS,
            measureCurrent: bundle_1.Measure.MeasureCurrent.create(), // Mesure de courant vide
        });
        // Encode le message Protobuf
        const messageBuffer = bundle_1.Measure.encode(measure).finish();
        console.log("🧪 Mesure construite :", measure);
        //simulator.publish("/measure/current", value);
        simulator.publish("/measure/current", Buffer.from(messageBuffer), {
            qos: 1,
        });
        // Affichage lisible de la date
        const dateString = new Date(timestamp).toLocaleString("fr-FR");
        console.log(`📤 Mesure envoyée : ${value.toFixed(2)} A à ${dateString}`);
    }, 10000);
});
simulator.on("message", (topic, payload, packet) => {
    const responseTopic = packet.properties?.responseTopic;
    const correlationData = packet.properties?.correlationData;
    if (!responseTopic || !correlationData)
        return;
    const msg = payload.toString();
    console.log(`📨 Reçu sur ${topic}:`, msg);
    let responseMsg = "";
    if (topic === "welding/start/request") {
        responseMsg = "Soudage démarré";
    }
    else if (topic === "welding/stop/request") {
        responseMsg = "Soudage arrêté";
    }
    else if (topic.startsWith("wp/")) {
        const wpId = topic.split("/")[1];
        responseMsg = `MOS supprimé: ${wpId}`;
    }
    simulator.publish(responseTopic, responseMsg, {
        qos: 1,
        properties: {
            correlationData,
        },
    });
});
//# sourceMappingURL=simulator.js.map