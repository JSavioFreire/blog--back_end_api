import express from "express";
import TecsController from "../controller/tecsController.js";

const router = express.Router();

router
    .get('/tec', TecsController.listTecs)
    .get('/tec/:id', TecsController.seeWithId)
    .post('/tec', TecsController.createTecs)
    .put('/tec/:id', TecsController.changeTecs)
    .delete('/tec/:id', TecsController.deleteTecs)

export default router;