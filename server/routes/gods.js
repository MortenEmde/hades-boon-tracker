const express = require('express');
const router = express.Router();

const gods = require('../db/gods.json')

router.get('/', async function(req, res,) {
  res.send(gods);
});

module.exports = router;
