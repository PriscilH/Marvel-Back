const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const Fav = require("../models/Fav");

router.post("/fav/create", async (req, res) => {
  try {
    const newFav = await new Fav({
      idMarvel: req.fields.item.idMarvel,
      title: req.fields.item.title,
      category: req.fields.category,
      date: new Date(),
    });
    await newFav.save();

    res.status(200).json({ message: "Fav created" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get("/alreadyfav", async (req, res) => {
  await Fav.exists({ idMarvel: req.query.idMarvel }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.delete("/fav/delete", async (req, res) => {
  try {
    const favToDelete = await Fav.find({ idMarvel: req.fields.idMarvel });
    await favToDelete[0].deleteOne();
    res.status(200).json("Fav successfully removed");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
