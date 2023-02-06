import express from "express";
import InspirationController from "../controller/inspirationController.js";

const router = express.Router();

router
    .get('/inspiration', InspirationController.listInspiration)
    .get('/inspiration/:id', InspirationController.seeWithId)
    .post('/inspiration', InspirationController.createInspiration)
    .put('/inspiration/:id', InspirationController.changeInspiration)
    .delete('/inspiration/:id', InspirationController.deleteInspiration)

export default router;