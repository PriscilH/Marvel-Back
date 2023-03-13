require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

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

app.get("/", (req, res) => {
    try {
        // console.log(process.env.MARVEL_API_KEY); // aoNbSx9f0IWEtt7q
        return res.status(200).json("Bienvenue sur notre serveur Marvel 🍣");
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    });

app.all("*", (req, res) => {
    res.status(404).json({error: error.message})
});

const PORT = process.env.PORT || 3001

app.listen(process.env.PORT || 3001, () => {
    console.log("Bienvenue sur le serveur Marvel ! sur le port " + PORT);
});

