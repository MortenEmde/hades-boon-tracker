const express = require('express');
const router = express.Router();

const aresBoons = require('../db/aresBoons.json')

router.get('/', async function(req, res,) {
  res.send(aresBoons);
});

module.exports = router;
