const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { todoModelName, todoSchema } = require("./models");
dotenv.config();

mongoose.set("strictQuery", false);

const db_url = process.env.DATABASE_CONNECTION_URL;

const connectionDB = async () => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected :)");
    return true;
  } catch (error) {
    console.log({
      error: error.message,
      message: "Database Connection Error",
    });
    return false;
  }
};

connectionDB();

const TodoModel = mongoose.model(todoModelName, todoSchema);

module.exports = { TodoModel };
