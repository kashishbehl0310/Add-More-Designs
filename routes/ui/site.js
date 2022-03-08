const express = require("express");
const path = require("path");

const siteRouter = express.Router();

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

module.exports = siteRouter;

