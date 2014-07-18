var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = require('../data');
  res.render('index', {
      title: 'Amaze UI Widget Demo',
      data: data
  });
});

module.exports = router;
