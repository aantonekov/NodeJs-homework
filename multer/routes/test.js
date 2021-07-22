const express = require('express')
const multer = require('multer')
const path = require('path')
const crypto = require('crypto');
const fs = require('fs');

const router = express.Router();

const upload = multer({
    dest: path.join(__dirname, 'uploads')
});

router.post('/', upload.single('lalala'),async (req, res) => {
   
    let reqFile = req.file;
    let reqBody = req.body;
    console.log(reqFile);
    console.log(reqBody);

    const sha1 = await crypto.createHash('sha1').update('reqFile').digest('hex');
    console.log('hexSha1: ',sha1);

    const sha256 = await crypto.createHash('sha256').update('reqBody').digest('hex')
    console.log('hexSha256: ',sha256); 

    res.json({status:'ok'})

    // fs.rename('/tmp/hello', '/tmp/world', (err) => {
    //     if (err) throw err;
    //     console.log('renamed complete');
    //   });

})




module.exports = router;