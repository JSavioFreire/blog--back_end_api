import express from "express";
import PostController from "../controller/postController.js";

const router = express.Router();

router
    .get('/post', PostController.listPost)
    .get('/post/:id', PostController.seeWithId)
    .post('/post', PostController.createPost)
    .put('/post/:id', PostController.changePost)
    .delete('/post/:id', PostController.deletePost)

export default router;