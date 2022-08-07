import express from "express";
import marketRoute from "./marketRoute";

const router = express.Router();

router.use("/market", marketRoute);

module.exports = router;
