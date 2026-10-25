import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected sucessfully");

  //  await sequelize.sync({ alter: true });
    console.log("tables synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("error", error.message);
  }
};

startServer();
