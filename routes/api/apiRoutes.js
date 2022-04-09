const express = require("express");
const apiRouter = express.Router();

const sendMail = require("../../controllers/sendMail");

apiRouter.post("/save-details", sendMail);

module.exports = apiRouter;
