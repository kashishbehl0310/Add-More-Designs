const express = require("express");
const fetchProjects = require("../../controllers/fetchProjectsByLimit");
const apiRouter = express.Router();

const sendMail = require("../../controllers/sendMail");

apiRouter.post("/save-details", sendMail);
apiRouter.get("/projects", fetchProjects)

module.exports = apiRouter;
