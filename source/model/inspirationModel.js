import mongoose from "mongoose";

const IspirationSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'content': { type: String, required: true },
        'writer': { type: String, required: true },
        'image': { type: String, required: true },
        'video': { type: String }
    }
);

const inspirations = mongoose.model('inspiration', IspirationSchema);

export default inspirations;