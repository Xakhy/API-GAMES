const Game = require("../models/Game");

exports.createGame = async (req, res) => {
  const game = await Game.create({
    ...req.body,
    UserId: req.userId
  });
  res.json(game);
};

exports.getGames = async (req, res) => {
  const { page = 1, limit = 5, minRating } = req.query;

  const where = { UserId: req.userId };
  if (minRating) where.rating = minRating;

  const games = await Game.findAll({
    where,
    limit: parseInt(limit),
    offset: (page - 1) * limit,
    order: [["rating", "DESC"]]
  });

  res.json(games);
};

exports.getGame = async (req, res) => {
  const game = await Game.findByPk(req.params.id);
  res.json(game);
};

exports.updateGame = async (req, res) => {
  await Game.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ msg: "Actualizado" });
};

exports.deleteGame = async (req, res) => {
  await Game.destroy({
    where: { id: req.params.id }
  });
  res.json({ msg: "Eliminado" });
};