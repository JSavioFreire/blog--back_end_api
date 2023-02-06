import mongoose from "mongoose";

const IspirationSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'tec': { type: mongoose.Schema.Types.ObjectId, ref: 'tec', required: true },
        'content': { type: String, required: true },
        'dev': { type: String, required: true },
        'image': { type: String, required: true },
        'difficult': { type: Number, required: true },
        'link': { type: String },
        'video': { type: String }
    }
);

const inspirations = mongoose.model('inspiration', IspirationSchema);

export default inspirations;