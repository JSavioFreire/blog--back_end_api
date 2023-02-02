import mongoose from "mongoose";

mongoose.connect('mongodb+srv://devsav:gW7vxwCkqu0L3iV8@cluster0.ixij6gt.mongodb.net/blog');

let db = mongoose.connection;

export default db;