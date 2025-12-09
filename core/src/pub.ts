import mqtt from "mqtt";

const server = "mqtt://localhost:1883";

const pub = mqtt.connect(server);
export function pubHello(cmd: string) {
  pub.publish("hello/pub", cmd);
  console.log("MQTT sent Command", cmd);
}
export default pub;
