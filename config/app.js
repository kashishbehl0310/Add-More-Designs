const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

let dotenvPath = `${path.dirname(__dirname)}/.env`;

// in project root try <environment>.env and fallback on '.env'
if (!process.env.NODE_ENV || process.env.NODE_ENV === "") {
  try {
    fs.accessSync(dotenvPath, fs.F_OK);
  } catch (e) {
    dotenvPath = `${path.dirname(__dirname)}/.env`;
  }
}

dotenv.config({
  silent: true,
  path: dotenvPath
});

const config = {
  nodemailerEmail: process.env.NODEMAILER_EMAIL || "kashishbehl36@gmail.com",
  nodemailerPass: process.env.NODEMAILER_PASS || "ckdmbdcmjygvndlz",
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
}

module.exports = config;