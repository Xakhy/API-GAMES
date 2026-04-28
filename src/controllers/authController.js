const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ msg: "Campos obligatorios" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash });

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ msg: "No existe" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)   return res.status(401).json({ msg: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user.id }, "secretkey", {
    expiresIn: "1h"
  });

  res.json({ token });
};