import mongoose from "mongoose"

mongoose.connect("mongodb+srv://bruno:1245@node-express.vluqxke.mongodb.net/bruno-node");

let db = mongoose.connection;

export default db;