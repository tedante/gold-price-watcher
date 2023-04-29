import cron from "node-cron";
import { TIMEZONE } from "#config/general";
import { goldPrice } from "#modules/goldPrice";

function schedule() {
  cron.schedule(
    "0 9 * * *",
    async () => {
      try {
        console.log("running");
        await goldPrice()
      } catch (err) {
        console.log(err, "err in cron");
      }
    },
    {
      scheduled: true,
      timezone: TIMEZONE,
    }
  );
}

export default schedule;
