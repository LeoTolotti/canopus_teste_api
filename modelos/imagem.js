import mongoose, { mongo } from "mongoose";

const imgSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Imagem", imgSchema);
