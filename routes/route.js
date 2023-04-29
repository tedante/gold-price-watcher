import { Router } from "express";

let router = Router();

router
  .get("/", (_, res) => {
    res.send(`running`)
  })

export default router;