const express = require('express');

const router = express.Router();

const chaosBoons = require('../db/chaosBoons.json');

router.get('/', async (req, res) => {
  res.send(chaosBoons);
});

module.exports = router;
