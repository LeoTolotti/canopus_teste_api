import User from "../modelos/user.js";

class UserControler {
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      const newUser = await User.findOne({ email: email, password: password });
      if (!newUser) {
        return res.status(401).json({ error: "Credenciais inválidas." });
      }
      return res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Falha na operação." });
    }
  }
  async create(req, res) {
    try {
      const { email, password, adm } = req.body;
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(404).json({ error: "Usuário já cadastrado." });
      }
      const newUser = await User.create({
        email: email,
        password: password,
        adm: adm,
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
export default new UserControler();
