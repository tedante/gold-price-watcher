import express from "express";
import routes from "./routes/route.js";
import { PORT } from "#config/general";
import schedule from "#schedule/schedule";

const app = express();

app.use("/", routes);

schedule();

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
