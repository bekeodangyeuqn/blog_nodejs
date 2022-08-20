const newsController = require("../app/controllers/NewsController");
const express = require("express");
const newsRouter = express.Router();

newsRouter.get("/", newsController.index);

module.exports = newsRouter;
