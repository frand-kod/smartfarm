// buat konfigurasi untuk pubsub MQTT

import mqtt from "mqtt";

const server = "mqtt://localhost:1883";

const sub = mqtt.connect(server);

sub.on("connect", () => {
  console.log("MQTT Connected Successfully");
  // subsribe topic
  sub.subscribe("hello/pub");
});
sub.on("message", (topic, msg) => {
  console.log("MQTT Message : ", topic, msg.toString());
});
export default sub;
