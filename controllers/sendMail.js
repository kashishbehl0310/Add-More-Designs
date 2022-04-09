const path = require("path");
const ejs = require("ejs");

const formParse = require("../utils/formParser");
const mailWrapper = require("../utils/mailWrapper");
const config = require("../config/app");

async function sendMail(req, res) {
  const rePath = path.join(__dirname, "../");
  const parsedData = await formParse(req);
  if (parsedData) {
    const {
      name,
      email,
      website,
      message
    } = parsedData;
    ejs.renderFile(rePath + "views/mailer/query.ejs",
      {
        name,
        email,
        website,
        message
      },
      async (err, html) => {
        if (err) {
          console.log("err parsing template", err);
        } else {
          const mailOptions = {
            sender: `${name} <${email}>`,
            to: config.nodemailerEmail , // receiver email,
            subject: `New Query received from  ${name}`,
            html
          };
          let resp = await mailWrapper(mailOptions);
          if (resp) {
            console.log("hell Yeah");
            res.status(200).send({
              success: true
            });
          } else {
            return res.status(500).send({
              success: false
            });
          }
        }
      }
    )
    ejs.renderFile(rePath + "views/mailer/thankyou.ejs",
      {
        name,
        email,
        website,
        message
      },
      async (err, html) => {
        if (err) {
          console.log("err parsing template", err);
        } else {
          const mailOptions = {
            sender: config.nodemailerEmail,
            to: email , // receiver email,
            subject: `Thank you ${name}!`,
            html
          };
          let resp = await mailWrapper(mailOptions);
          console.log("Sent thank you email")
        }
      }
    )
  }
}

module.exports = sendMail;