const express = require('express');
const { post, get } = require('./users');
const router = express.Router();
const multer = require('multer')
const upload = multer()
const validator = require('./validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

});

router.post('/valid', upload.none(),validator.validation,(req,res) => {
  console.log(req.body);
  
})

module.exports = router;

