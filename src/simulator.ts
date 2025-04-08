import { createMqttClient } from "./mqttClient";
import dotenv from "dotenv";
import { Measure } from "./protos/generated/bundle";

dotenv.config();

const simulator = createMqttClient("simulator");

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

  // Publication périodique d'une mesure toutes les 10 secondes
  // avec un message Protobuf
  setInterval(() => {
    const timestamp = Date.now();
    const value = Math.random() * 25;
    const measure = Measure.create({
      header: {
        timestamp: Date.now(),
        version: "1.0.0",
      },
      value: value, // Valeur entre 0 et 25
      pulsed: Measure.Pulsed.CONTINUOUS,
      measureCurrent: Measure.MeasureCurrent.create(), // Mesure de courant vide
    });
    // Encode le message Protobuf
    const messageBuffer = Measure.encode(measure).finish();
    console.log("🧪 Mesure construite :", measure);

    //simulator.publish("/measure/current", value);
    simulator.publish("/measure/current", Buffer.from(messageBuffer), {
      qos: 1,
    });
    // Affichage lisible de la date
    const dateString = new Date(timestamp).toLocaleString("fr-FR");
    console.log(`📤 Mesure envoyée : ${value.toFixed(2)} A à ${dateString}`);
  }, 10_000);
});

simulator.on("message", (topic, payload, packet) => {
  const responseTopic = packet.properties?.responseTopic;
  const correlationData = packet.properties?.correlationData;
  if (!responseTopic || !correlationData) return;

  const msg = payload.toString();
  console.log(`📨 Reçu sur ${topic}:`, msg);

  let responseMsg = "";
  if (topic === "welding/start/request") {
    responseMsg = "Soudage démarré";
  } else if (topic === "welding/stop/request") {
    responseMsg = "Soudage arrêté";
  } else if (topic.startsWith("wp/")) {
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
