import tutorials from "../model/tutorialModel.js";

class TutorialController {
    static listTutorial = (req, res) => {
        tutorials.find().populate('tec').exec((err, tutorial) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).json(tutorial);
            };
        });
    };
    static seeWithId = (req, res) => {
        const id = req.params.id;
        tutorials.findById(id).populate('tec').exec((err, tutorial) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(tutorial);
            };
        });
    };
    static createTutorial = (req, res) => {
        let Tutorial = new tutorials(req.body);
        Tutorial.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).send(Tutorial.toJSON())
            };
        });
    };
    static changeTutorial = (req, res) => {
        const id = req.params.id;
        tutorials.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send(req.body);
            };

        });
    };
    static deleteTutorial = (req, res) => {
        const id = req.params.id;
        tutorials.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Deletado' })
            };
        });
    };
};

export default TutorialController;