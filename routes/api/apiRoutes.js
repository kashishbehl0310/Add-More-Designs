const express = require("express");
const fetchProjects = require("../../controllers/fetchProjectsByLimit");
const apiRouter = express.Router();

const sendMail = require("../../controllers/sendMail");
const subscribe = require("../../controllers/subscribe");

apiRouter.post("/save-details", sendMail);
apiRouter.post("/subscribe", subscribe);
apiRouter.get("/projects", fetchProjects)

module.exports = apiRouter;
