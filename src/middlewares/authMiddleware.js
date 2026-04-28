const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ msg: "No token" });
  }

  try {
    // 🔥 QUITAMOS "Bearer "
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token inválido" });
  }
};