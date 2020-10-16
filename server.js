const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.get("/", function (req, res) {
  let filepath = path.join(__dirname, "./pages/index.html");
  res.sendFile(filepath);
});

// --------------------------- about route ---------------------------

app.get("/about", function (req, res) {
  const filepath = path.join(__dirname, "./pages/about.html");
  res.sendFile(filepath);
});

// --------------------------- interest route ---------------------------

app.get("/interest", function (req, res) {
  const fp = path.join(__dirname, "./pages/interests.html");
  res.sendFile(fp);
});

// ------------------------- favorite route ---------------------------

app.get("/favorite", function (req, res) {
  const fp = path.join(__dirname, "./pages/favorites.html");
  res.sendFile(fp);
});

// ------------------------- contact route ---------------------------

app.get("/contact", function (req, res) {
  const fp = path.join(__dirname, "./pages/contact.html");
  res.sendFile(fp);
});

// ------------------------- css route ---------------------------

app.get("/style", function (req, res) {
  const fp = path.join(__dirname, "./css/style.css");
  res.sendFile(fp);
});

// ------------------------- script route ---------------------------

app.get("/script", function (req, res) {
  const fp = path.join(__dirname, "./js/script.js");
  res.sendFile(fp);
});

// ------------------------- assets route ---------------------------

app.get("/favicon", function (req, res) {
  const fp = path.join(__dirname, "./assets/favicon.ico");
  res.sendFile(fp);
});

// ------------------------- app listener ---------------------------

app.listen(port, function () {
  console.log(
    `Valentine's Bio Site App listening at http://localhost:${port} 🤩️`
  );
  console.log(`Hold down CTRL & click link ☝️ 🙋‍♂️️`);
});
