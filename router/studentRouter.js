import express from "express";
import controller from "../controller/controller.js";

const router = express.Router();

router.post("/saveData", controller.saveData);

router.post("/findDataById", controller.findDataById);

router.post("/deleteById", controller.deleteDataById);

export default router;
