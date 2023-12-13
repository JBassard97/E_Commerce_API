const express = require("express");
const routes = require("./routes");
// TODO: import sequelize connection ✅
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// TODO: sync sequelize models to the database, then turn on the server ✅
async function startApplication() {
  try {
    await sequelize.sync({ force: false }); // Set force to true if you want to drop and recreate tables on every server start
    console.log("Database synced successfully!");

    // Start your server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}!`);
    });
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

startApplication();