import mongoose from "mongoose";

const IspirationSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'content': { type: String, required: true },
        'content2': { type: String },
        'writer': { type: String, required: true },
        'image': { type: String, required: true },
        'image2': { type: String },
        'link': { type, String },
        'video': { type: String }
    }
);

const inspirations = mongoose.model('inspiration', IspirationSchema);

export default inspirations;