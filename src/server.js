const app = require("./app");
const sequelize = require("./config/db");

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
});