const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
    try {
        const name = req.query.name;
        const limit = req.query.limit || 100;
        const skip = req.query.skip;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY_MARVEL}&name=${name}&limit=${limit}$skip=${skip}`
        );
        res.json(response.data);
    } catch (error) {
        console.log("error characters =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  router.get("/character/:characterId", async (req, res) => {
    try {
        const characterId = req.params.characterId;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.json(response.data);
    } catch (error) {
        console.log("error characters =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  module.exports = router;