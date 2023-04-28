import { Router } from "express";

let router = Router();

router
  .get("/", (_, res) => {
    res.status(200).json("Running");
  })

export default router;