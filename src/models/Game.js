const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Game = sequelize.define("Game", {
  title: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING },
  rating: {
    type: DataTypes.FLOAT,
    validate: { min: 0, max: 10 }
  }
});

User.hasMany(Game);
Game.belongsTo(User);

module.exports = Game;