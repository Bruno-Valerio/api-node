import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: string },
        titulo: { type: string, required: true },
        autor: { type: string, required: true },
        editora: { type: string, required: true },
        numeroPaginas: { type: Number }
    }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;