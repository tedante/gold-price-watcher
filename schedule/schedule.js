import cron from "node-cron";
import { TIMEZONE } from "#config/general";

function schedule() {
  cron.schedule(
    "* * * * *",
    async () => {
      try {
        console.log("runing");
      } catch (err) {
        console.log(err, "err in cron auto message");
      }
    },
    {
      scheduled: true,
      timezone: TIMEZONE,
    }
  );
}

export default schedule;
