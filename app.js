require("dotenv").config();
require("./config/mongodb.js");

const hbs = require("hbs");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const users = [
  {
    name: "Toto",
    email: "toto@titi.tutu",
    favoriteLanguage: "Language of love",
  },
];

const images = ["/img/img-1.jpg", "/img/img-2.jpg", "/img/img-3.jpg"];

app.listen(process.env.PORT, () => {
  console.log(
    "hey hey hey ready to code & http://localhost:" + process.env.PORT
  );
});
