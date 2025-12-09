// buat konfigurasi untuk pubsub MQTT

import mqtt from "mqtt";

const server = "mqtt://localhost:1883";

const sub = mqtt.connect(server);
const TOPIC = "hello/pub";

sub.on("connect", () => {
  console.log("MQTT Connected Successfully");
  sub.subscribe(TOPIC);
});

// Handle All messages from topic
sub.on("message", (topic, msg) => {
  console.log("MQTT Message : ", topic, msg.toString());
});
export default sub;
