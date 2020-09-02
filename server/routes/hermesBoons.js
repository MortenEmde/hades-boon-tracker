const express = require('express');

const router = express.Router();

const hermesBoons = require('../db/hermesBoons.json');

router.get('/', async (req, res) => {
  res.send(hermesBoons);
});

module.exports = router;
