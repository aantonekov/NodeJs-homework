const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('main.ejs')
    console.log(req.file);
});

module.exports = router;