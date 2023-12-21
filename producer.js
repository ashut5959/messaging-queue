const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

async function init() {
  const res = await notificationQueue.add("email to asutosh", {
    email: "asutosh@gmail.com",
    subject: "welcome to mess",
    body: "hay Asutosh, Welcome to redis world",
  });
  console.log("Job added to queue", res.id);
}

init();
