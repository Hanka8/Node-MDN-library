let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cool', { title: 'Express', cool: 'You are so cool' });
});

module.exports = router;