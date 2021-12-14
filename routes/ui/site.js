const express = require("express");
const path = require("path");

const siteRouter = express.Router();

// Home Page Route
siteRouter.get("/", (req, res) => {
  res.render("home.html", {});
});

module.exports = siteRouter;

