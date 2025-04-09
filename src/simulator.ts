import { createMqttClient } from "./mqttClient";
import dotenv from "dotenv";
import { Measure, RequestResponse } from "./protos/generated/bundle";

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
    //}, 10_000); // 10 secondes
    //}, 30_000); // 30 secondes
  }, 500); // 500ms pour simuler une mesure continue
});

// Envoi de mesure de vitesse toutes les 500ms
setInterval(() => {
  const timestamp = Date.now();
  const value = Math.random() * 100; // Valeur de vitesse entre 0 et 100

  const measure = Measure.create({
    header: {
      timestamp,
      version: "1.0.0",
    },
    value,
    pulsed: Measure.Pulsed.CONTINUOUS,
    measureSpeed: Measure.MeasureSpeed.create(), // Mesure de vitesse vide
  });

  const messageBuffer = Measure.encode(measure).finish();

  simulator.publish("/measure/speed", Buffer.from(messageBuffer), {
    qos: 1,
  });

  const dateString = new Date(timestamp).toLocaleString("fr-FR");
  console.log(
    `📤 Mesure de vitesse envoyée : ${value.toFixed(2)} mm/s à ${dateString}`
  );
}, 500); // 500ms pour simuler une mesure continue

simulator.on("message", (topic, payload, packet) => {
  const responseTopic = packet.properties?.responseTopic;
  const correlationData = packet.properties?.correlationData;
  if (!responseTopic || !correlationData) return;

  const msg = payload.toString();
  console.log(`📨 Reçu sur ${topic}:`, msg);

  // Simule une erreur aléatoire
  const isError = Math.random() < 0.25; // 25% de chance d'erreur

  let status = isError ? "KO" : "OK";
  let message = "";

  if (topic === "welding/start/request") {
    message = "Soudage démarré";
  } else if (topic === "welding/stop/request") {
    message = "Soudage arrêté";
  } else if (topic.startsWith("wp/")) {
    const wpId = topic.split("/")[1];
    message = `MOS supprimé: ${wpId}`;
  } else {
    status = "KO";
    message = "Commande inconnue";
  }

  // Créer la réponse Protobuf
  const response = RequestResponse.create({ status, message });
  const responseBuffer = RequestResponse.encode(response).finish();

  simulator.publish(responseTopic, Buffer.from(responseBuffer), {
    qos: 1,
    properties: {
      correlationData,
    },
  });

  console.log(`📤 Réponse envoyée : ${status} - ${message}`);
});
