import mongoose from "mongoose";

const TutorialSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'tec': { type: mongoose.Schema.Types.ObjectId, ref: 'tec', required: true },
        'content': { type: String, required: true },
        'dev': { type: String, required: true },
        'image': { type: String },
        'difficult': { type: Number },
        'link': { type: String },
        'video': { type: String }
    }
);

const tutorials = mongoose.model('tutorial', TutorialSchema);

export default tutorials;