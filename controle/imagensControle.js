import Imagen from "../modelos/imagem.js";

class ImagensControle {
  async index(req, res) {
    try {
      const newImg = await Imagen.find();
      return res.status(201).json(newImg);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { titulo, texto, img } = req.body;
      const newImg = await Imagen.create({
        titulo: titulo,
        texto: texto,
        img: img,
      });
      await newImg.save();
      return res.status(201).json(newImg);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
export default new ImagensControle();
