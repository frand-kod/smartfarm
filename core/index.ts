import { MqttClient } from "mqtt";

console.log("Core is starting ...");

import pub, { pubHello } from "./src/pub";
import sub from "./src/sub";
import { broadcast } from "./src/ws";

sub.subscribe("hello/pub");
pub.on("message", (topic, msg) => {
  broadcast({
    topic,
    value: msg.toString(),
    ts: Date.now(),
  });
});
