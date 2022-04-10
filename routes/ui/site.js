const express = require("express");
const path = require("path");

const siteRouter = express.Router();
const renderProjectController = require("../../controllers/renderProjectController");
const projects = require("../../utils/projects");

let projectCopy = JSON.parse(JSON.stringify(projects));

projectCopy = projectCopy.splice(0, 4)

// Home Page Route
siteRouter.get("/", (req, res) => {
  res.render("home.html", {
    projects: projectCopy
  });
});

siteRouter.get("/about", (req, res) => {
  res.render("about.html", {});
});

siteRouter.get("/work", (req,res) => {
  res.render("work.html", {
    projects: projectCopy
  });
})

siteRouter.get("/project/:id", renderProjectController);

module.exports = siteRouter;

