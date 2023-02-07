import express from "express";
import posts from './postRoutes.js';
import tecs from "./tecsRoutes.js";
import inspirations from "./inspirationRoutes.js";
import tutorials from "./tutorialRoutes.js";

const indexRoutes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'blog' });
    });
    app.use(
        express.json(), posts, tecs, inspirations, tutorials
    );
};


export default indexRoutes;