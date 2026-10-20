const express = require("express");
const router = express.Router();

const usuarioController =
  require("../projeto_ds_node/Controllers/UsuarioController");

router.post(
  "/usuarios",
  usuarioController.criarUsuario
);

router.get(
  "/usuarios",
  usuarioControler.consultarUsuarios
);

router.post(
  "/usuarios",
  usuarioControler.consultarUsuarios
);

router.post(
  "/login",
  usuarioControleer.login.Usuario
);

module.exports = router;
  
