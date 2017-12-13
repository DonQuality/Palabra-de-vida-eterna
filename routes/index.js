var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Iglesia Pentecostal Palabra de Vida Eterna' });
});

module.exports = router;

