import { WebSocketServer } from "ws";

const websocket = new WebSocketServer({ port: 8080 });

websocket.on("connection", (ws) => {
  console.log("WS CLient Connected");
  ws.send("Hello from server");
});

export function broadcast(data: any) {
  const msg = JSON.stringify(data);
  websocket.clients.forEach((contents) => contents.send(msg));
}

export default websocket;
