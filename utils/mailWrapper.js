const nodemailer = require("nodemailer");
const config = require("../config/app");

async function mailerWrapper(mailOptions) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: config.nodemailerEmail,
        pass: config.nodemailerPass
      }
    })
    
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    transporter.sendMail(mailOptions, (err, resp) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  })
}

module.exports = mailerWrapper;