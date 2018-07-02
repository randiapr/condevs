const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//bodyparser middleware config with express
app.use(bodyParser.urlEncoded({ extended: false }));
app.use(bodyParser.json());

//import mongo key
const db = require("./config/keys").mongoURI;

const port = process.env.port || 5000;

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("Server connected to mongodb"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Server running....."));
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.listen(port, () => console.log(`Server running on port ${port}`));
