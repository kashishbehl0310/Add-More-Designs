const express = require("express");
const path = require("path");

const mailerRouter = express.Router();

mailerRouter.get("/welcome", (req, res) => {
  res.render("mailer/welcome.ejs", {
    name: "Kashish",
    email: "kashishbehl36@gmail.com",
    website: "www.storyxpress.co",
    message: "Hey buddy"
  })
});

mailerRouter.get("/thank-you", (req, res) => {
  res.render("mailer/thankyou.ejs", {
    name: "Kashish",
    email: "kashishbehl36@gmail.com",
    website: "www.storyxpress.co",
    message: "Hey buddy"
  })
});


module.exports = mailerRouter;
