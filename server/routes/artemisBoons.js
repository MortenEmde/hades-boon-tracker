const express = require('express');

const router = express.Router();

const artemisBoons = require('../db/artemisBoons.json');

router.get('/', async (req, res) => {
  res.send(artemisBoons);
});

module.exports = router;
