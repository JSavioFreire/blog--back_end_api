import posts from "../model/postModel.js";

class PostController {
    static listPost = (req, res) => {
        posts.find((err, post) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).json(post);
            };
        });
    };
    static seeWithId = (req, res) => {
        const id = req.params.id;
        posts.findById(id, (err, post) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(post);
            };
        });
    };
    static createPost = (req, res) => {
        let post = new posts(req.body);
        post.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).send(post.toJSON())
            };
        });
    };
    static changePost = (req, res) => {
        const id = req.params.id;
        posts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send(req.body);
            };

        });
    };
    static deletePost = (req, res) => {
        const id = req.params.id;
        posts.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Deletado' })
            };
        });
    };
};

export default PostController;