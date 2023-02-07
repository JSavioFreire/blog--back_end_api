import express from "express";
import TutorialController from "../controller/tutorialController.js";

const router = express.Router();

router
    .get('/tutorial', TutorialController.listTutorial)
    .get('/tutorial/:id', TutorialController.seeWithId)
    .post('/tutorial', TutorialController.createTutorial)
    .put('/tutorial/:id', TutorialController.changeTutorial)
    .delete('/tutorial/:id', TutorialController.deleteTutorial)

export default router;