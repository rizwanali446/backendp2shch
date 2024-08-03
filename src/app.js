const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose-connection.js");
const ownersRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const shopRouter = require("./routes/shopRouter.js");
const indexRouter = require("./routes/index.js");
const expressSession = require("express-session");
const ejs = require("ejs");

const flash = require("connect-flash");

//const indexRouter = require("./routes/index.js");

require("dotenv").config({ path: "../.env" });
// console.log(process.env.JWT_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());
// app.get("/", (req, res) => {
//   res.send("hi rizwan");
// });
//routes with models
// app.get("/", function (req, res) {
//   res.render("index");
// });
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/shop", shopRouter);
app.listen(3000);
