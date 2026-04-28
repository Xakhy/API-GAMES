const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//  RUTAS PRINCIPALES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/games", require("./routes/gameRoutes"));

// RUTA BASE (esto es lo que te faltaba)
app.get("/", (req, res) => {
  res.json({ msg: "API Games funcionando" });
});

module.exports = app;
