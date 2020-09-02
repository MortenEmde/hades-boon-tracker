const express = require('express');

const router = express.Router();

const zeusBoons = require('../db/zeusBoons.json');

router.get('/', async (req, res) => {
  res.send(zeusBoons);
});

module.exports = router;
