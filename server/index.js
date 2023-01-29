const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { router } = require("./routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
