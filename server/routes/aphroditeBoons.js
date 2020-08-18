const express = require('express');
const router = express.Router();

const aphroditeBoons = require('../db/aphroditeBoons.json')

router.get('/', async function(req, res,) {
  res.send(aphroditeBoons);
});

module.exports = router;
