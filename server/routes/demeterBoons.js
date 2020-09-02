const express = require('express');

const router = express.Router();

const demeterBoons = require('../db/demeterBoons.json');

router.get('/', async (req, res) => {
  res.send(demeterBoons);
});

module.exports = router;
