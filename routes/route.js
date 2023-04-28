import { Router } from "express";
import getGoldPrice from "../modules/getGoldPrice";

let router = Router();

router
  .get("/", (_, res) => {
    let data = getGoldPrice();
    res.send(`${data}`)
  })

export default router;