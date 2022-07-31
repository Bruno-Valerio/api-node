import mongoose from "mongoose"

mongoose.connect("mongodb+srv://bruno:1245@cluster0.ig056gd.mongodb.net/?");

let db = mongoose.connection;

export default db;