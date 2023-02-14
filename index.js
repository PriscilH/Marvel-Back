const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/back-marvel")

// Import du model User
const User = require("./models/User");
// Import du model Fav
const Fav = require("./models/Fav");

// Import des routes :
const userRoutes = require("./routes/user");
app.use(userRoutes);
const favRoutes = require("./routes/fav");
app.use(favRoutes);
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const searchRoutes = require("./routes/search");
app.use(searchRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome on API Marvel !" });
  });

app.all("*", (req, res) => {
    res.status(404).json({error: error.message})
});

const PORT = process.env.PORT || 3001

app.listen(process.env.PORT, () => {
    console.log("Bienvenue sur le serveur Marvel ! sur le port" + PORT);
});

//hkdmXitbrO8hsuPW // API KEY MARVEL