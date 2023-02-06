import mongoose from "mongoose";

const IspirationSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'tec': { type: mongoose.Schema.Types.ObjectId, ref: 'tec', required: true },
        'content': { type: Array, required: true },
        'dev': { type: String, required: true },
        'image': { type: Array, required: true },
        'difficult': { type: String, required: true },
        'link': { type: String },
        'video': { type: String }
    }
);

const inspirations = mongoose.model('inspiration', IspirationSchema);

export default inspirations;