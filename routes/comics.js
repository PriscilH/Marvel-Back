const express = require("express");
const router = express.Router();
const axios = require("axios");

// Une route pour récupérer les comics en GET
router.get("/comics", async (req, res) => {
    try {
        const title = req.query.title;
        const limit = req.query.limit || 100;
        const skip = req.query.skip;

        let filters = "";
    if (title) {
      filters = filters + "&title=" + title;
    }
    if (limit) {
        filters = filters + "&limit=" + limit;
      }
      if (skip) {
        filters = filters + "&skip=" + skip;
      }
        const response = await axios.get(
            "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=" + 
            process.env.API_KEY_MARVEL +
            filters
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log("error comics =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  // Une route pour récupérer les comics liés à un personnage (GET)
  router.get("/comics/:characterId", async (req, res) => {
    try {
        console.log(req.params.characterId) // 5fcf9201d8a2480017b91470
        const characterId = req.params.characterId; 

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log("error message =>", error.message);
        res.status(400).json({message: error.message});
    }
  });

  module.exports = router;