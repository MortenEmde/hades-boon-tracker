const express = require('express');

const router = express.Router();

const dionysusBoons = require('../db/dionysusBoons.json');

router.get('/', async (req, res) => {
  res.send(dionysusBoons);
});

module.exports = router;
