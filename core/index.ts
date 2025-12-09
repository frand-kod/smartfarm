console.log("Core is starting ...");

import pub, { pubHello } from "./src/pub";
import { broadcast } from "./src/ws";
import sub from "./src/sub";

// jalankan subscriber, semua fungsi yang berkitan dengan subscriber di taruh di dalam sini
try {
  console.log("Subscriber is ready");
  sub.on("message", (topic, msg) => {
    broadcast({
      topic,
      value: msg.toString(),
      ts: Date.now(),
    });
  });
} catch (e) {
  console.log("Subscriber is failed");
}

// jalankan publisher, semua fungsi yang berkitan di taruh di dalam sini
pub.on("connect", () => {
  console.log("Publisher connected");

  //   publish sebanyak 10 kali
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      pubHello(`Hello from publisher ${i}`);
    }, i * 1500);
  }
});

// if lost for loong.. disconect server
process.on("SIGINT", () => {
  console.log("Shutting down...");

  pub.end();
  sub.end();

  process.exit(0);
});
