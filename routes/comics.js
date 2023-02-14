const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
    try {
        const title = req.query.title;
        const limit = req.query.limit || 100;
        const skip = req.query.skip;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY_MARVEL}&title=${title}&limit=${limit}$skip=${skip}`
        );
        res.json(response.data);
    } catch (error) {
        console.log("error comics =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  router.get("/comics/:characterId", async (req, res) => {
    try {
        const characterId = req.params.characterId;

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.json(response.data);
    } catch (error) {
        console.log("error message =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  module.exports = router;