const express = require('express');

const router = express.Router();

const poseidonBoons = require('../db/poseidonBoons.json');

router.get('/', async (req, res) => {
  res.send(poseidonBoons);
});

module.exports = router;
