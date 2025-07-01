const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Usuario "hardcodeado" (puede venir de la DB si querés)
const USUARIO_UNICO = {
  username: "jonasolman",
  passwordHash: bcrypt.hashSync("jonasolman123", 10),
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login recibido:", username, password);

  if (username !== USUARIO_UNICO.username) {
    return res.status(401).json({ message: "Usuario incorrecto" });
  }

  const validPassword = await bcrypt.compare(password, USUARIO_UNICO.passwordHash);

  if (!validPassword) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  }

  const token = jwt.sign({ usuario: username }, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({ token });
});

module.exports = router;
