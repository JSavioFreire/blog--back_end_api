import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'content': { type: String, required: true },
        'writer': { type: String, required: true },
        'image': { type: String, required: true },
        'video': { type: String }
    }
);

const posts = mongoose.model('post', PostSchema);

export default posts;