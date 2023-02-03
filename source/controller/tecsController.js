import tecs from "../model/tecsModel.js";

class TecsController {
    static listTecs = (req, res) => {
        tecs.find((err, tec) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).json(tec);
            };
        });
    };
    static seeWithId = (req, res) => {
        const id = req.params.id;
        tecs.findById(id, (err, tec) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(tec);
            };
        });
    };
    static createTecs = (req, res) => {
        let tec = new tecs(req.body);
        tec.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).send(tec.toJSON())
            };
        });
    };
    static changeTecs = (req, res) => {
        const id = req.params.id;
        tecs.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send(req.body);
            };

        });
    };
    static deleteTecs = (req, res) => {
        const id = req.params.id;
        tecs.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Deletado' })
            };
        });
    };
};

export default TecsController;