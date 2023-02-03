import mongoose from "mongoose";

const TecSchema = new mongoose.Schema(
    {
        id: { type: String },
        'title': { type: String, required: true },
        'content': { type: String, required: true },
        'image':{type:String, required: true}
    }
);

const tecs = mongoose.model('tec', TecSchema);

export default tecs;