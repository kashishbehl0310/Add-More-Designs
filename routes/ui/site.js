const express = require("express");
const path = require("path");

const siteRouter = express.Router();
const renderProjectController = require("../../controllers/renderProjectController");

// Home Page Route
siteRouter.get("/", (req, res) => {
  res.render("home.html", {});
});

siteRouter.get("/about", (req, res) => {
  res.render("about.html", {});
});

siteRouter.get("/work", (req,res) => {
  res.render("work.html", {});
})

siteRouter.get("/project/:id", renderProjectController);

module.exports = siteRouter;

