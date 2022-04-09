const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const compression = require("compression");

const siteRoutes = require("./routes/ui/site");
const siteRouter = require("./routes/ui/site");
const apiRouter = require("./routes/api/apiRoutes");

// Initializing Express Server
const app = express();
const port = 5000;

// Compressing All Responses
app.use(compression());

app.set("port", port);

// Setting Up views engine and directory
app.set("views", path.join(__dirname, "views"));
app.set("case sensitive routing", true);
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.text({ type: "image/*", limit: "50mb" }));
app.use(bodyParser.text({ type: "audio/*", limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// XSS protection headers
app.use((req, res, next) => {
  res.setHeader("X-XSS-Protection", "1; mode-block");
  next();
});


/**
 * Setting up cookie parser to be able to access client cookies
 */
 app.use(cookieParser());

 /**
 * Setting the folder routes
 */
app.use(express.static(path.join(__dirname, "dist/styles")));
app.use(express.static(path.join(__dirname, "dist/js")));
app.use(express.static(path.join(__dirname, "dist/lib")));
app.use(express.static(path.join(__dirname, "dist/videos")));

app.use("/app", express.static(path.join(__dirname, "dist/app")));
app.use("/fonts", express.static(path.join(__dirname, "dist/fonts")));
app.use("/img", express.static(path.join(__dirname, "dist/img")));
app.use("/static", express.static(path.join(__dirname, "dist/static")));
app.use("/js", express.static(path.join(__dirname, "dist/js")));
app.use("/style", express.static(path.join(__dirname, "dist/styles")));
app.use("/videos", express.static(path.join(__dirname, "dist/videos")));
app.use((req, res, next) => {
  // verify session objects
  // res.cookie("id", config.appKey);
  next();
});

app.use("/api", apiRouter);

app.use("/", siteRouter);

/**
 * @@ TODO
 * Error Handler
 */
//  app.use((err, req, res) => {
//   res.render("error.html", { env: config.env, baseURL: config.baseURL });
// });

module.exports = app;

