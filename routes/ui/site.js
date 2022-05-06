const express = require("express");
const path = require("path");

const siteRouter = express.Router();
const renderProjectController = require("../../controllers/renderProjectController");
const projects = require("../../utils/projects");
const journals = require("../../data/journal");
const fetchPostById = require("../../controllers/fetchPostById");

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

siteRouter.get("/services", (req, res) => {
  res.render("services.html", {});
});

siteRouter.get("/journal", (req, res) => {
  let journalCopy = JSON.parse(JSON.stringify(journals));
  journalCopy = journalCopy.splice(0, 4)
  res.render("journal.html", {
    journals: journalCopy
  });
});

siteRouter.get("/project/:id", renderProjectController);

siteRouter.get("/journal/:id", fetchPostById)

module.exports = siteRouter;

