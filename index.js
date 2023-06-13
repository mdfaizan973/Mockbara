const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const { JobPostRouter } = require("./router/Post.Router");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the world");
});
app.use("/post", JobPostRouter);

app.listen(7776, async () => {
  try {
    await connection;
    console.log("server stated successfully");
  } catch (error) {
    console.log(error);
  }
});
