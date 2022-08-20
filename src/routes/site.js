const siteController = require("../app/controllers/SiteControllers");
const express = require("express");
const siteRouter = express.Router();

siteRouter.get("/search", siteController.search);
siteRouter.post("/search", siteController.create);
siteRouter.get("/", siteController.index);

module.exports = siteRouter;
