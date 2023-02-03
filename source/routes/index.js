import express from "express";
import posts from './postRoutes.js';
import tecs from "./tecsRoutes.js";

const indexRoutes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'blog' });
    });
    app.use(
        express.json(), posts, tecs
    );
};

export default indexRoutes;