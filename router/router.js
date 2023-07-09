import express from "express";
import crudModel from "../model/model.js";
import controller from "../controller/controller.js";

const router = express.Router();

router.get("/", controller.getAllData);

export default router;
