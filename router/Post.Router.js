const express = require("express");
const JobPostRouter = express.Router();
const { PostModel } = require("../model/Post.model");

JobPostRouter.post("/addpost", async (req, res) => {
  const data = req.body;
  const post = new PostModel(data);
  await post.save();
  res.json("Post Added");
});

JobPostRouter.get("/", async (req, res) => {
  try {
    const data = await PostModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { JobPostRouter };
