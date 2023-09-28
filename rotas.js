import { Router } from "express";
import imagensControle from "./controle/imagensControle.js";
import userControle from "./controle/userControle.js";
const rotas = new Router();

rotas.post("/user", userControle.create);
rotas.post("/login", userControle.loginUser);
rotas.get("/imagens", imagensControle.index);
rotas.post("/imagens", imagensControle.create);

export default rotas;
