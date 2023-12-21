const { Worker } = require("bullmq");

const sendEmail = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 5 * 1000));

const worker = new Worker("email-queue", async (job) => {
  console.log(`message received id: ${job.id}`);
  console.log(`Processing job`);
  console.log(`Sending email to ${job.data.email}`);
  await sendEmail();
  console.log("email sent successfully");
});

/**
 * A failed job event.
 * @event Worker#failed
 * @param {Error} err The error that caused the job to fail.
 * @param {Job} job The job that failed.
 */
worker.on("failed", (err, job) => {
  console.log(`Job ${job.id} failed with error: ${err.message}`);
});
