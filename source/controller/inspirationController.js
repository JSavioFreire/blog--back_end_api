import inspirations from "../model/inspirationModel.js";

class InspirationController {
    static listInspiration = (req, res) => {
        inspirations.find((err, inspiration) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).json(inspiration);
            };
        });
    };
    static seeWithId = (req, res) => {
        const id = req.params.id;
        inspirations.findById(id, (err, inspiration) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(inspiration);
            };
        });
    };
    static createInspiration = (req, res) => {
        let inspiration = new inspirations(req.body);
        inspiration.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).send(inspiration.toJSON())
            };
        });
    };
    static changeInspiration = (req, res) => {
        const id = req.params.id;
        inspirations.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send(req.body);
            };

        });
    };
    static deleteInspiration = (req, res) => {
        const id = req.params.id;
        inspirations.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Deletado' })
            };
        });
    };
};

export default InspirationController;