const express = require('express');

const router = express.Router();

const athenaBoons = require('../db/athenaBoons.json');

router.get('/', async (req, res) => {
  res.send(athenaBoons);
});

module.exports = router;
