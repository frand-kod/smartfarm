import mqtt from "mqtt";

const server = "mqtt://localhost:1883";
const TOPIC = "hello/pub";

const pub = mqtt.connect(server);

// example Function
export function pubHello(cmd: string) {
  console.log("MQTT sent Command", cmd);
  // tampung pesan untuk di publish ketika nanti fungsi di panggil
  pub.publish(TOPIC, cmd);
}
export default pub;
