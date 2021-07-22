const express = require('express');
const router = express.Router();
const controllers = require('../controllers/test')
const multer = require('multer')
const upload = multer();

router.get('/', controllers.render);

router.post('/form', upload.none(), controllers.run)


module.exports = router;