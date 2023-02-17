const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
    try {
        const name = req.query.name;
        const limit = req.query.limit || 100;
        const skip = req.query.skip;

        let filters = "";
    if (name) {
      filters = filters + "&name=" + name;
    }
    if (limit) {
        filters = filters + "&limit=" + limit;
      }
      if (skip) {
        filters = filters + "&skip=" + skip;
      }
        const response = await axios.get(
            "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=" + 
            process.env.API_KEY_MARVEL +
            filters
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log("error characters =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  // Une route pour récupérer les infos liés à un personnage (GET)
  router.get("/character/:characterId", async (req, res) => {
    try {
        console.log(req.params.characterId) // 5fcf9218d8a2480017b914a0
        const characterId = req.params.characterId;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log("error characters =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  module.exports = router;