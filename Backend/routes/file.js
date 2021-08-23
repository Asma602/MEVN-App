var express = require('express');
var router = express.Router();
const multer = require('multer');
const db = require('../config/connection');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname.replace(/\s/g, ''));
    }
});
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 6,
    }
});
router.post('/upload', upload.single('file'), async (req, res, next) => {
    try {
        console.log(req.query);
        // await uploadImage(req.query.fileName);
        return res.status(201).json({
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.log(error);
    }
});


function uploadImage(file) {
    let sql =  `INSERT INTO images (path) VALUES ('${'http://localhost:3000/' + file}')`;
    return new Promise((resolve, reject) => {
        db.query(sql , (err, response) => {
            if(err) return reject(err);
            else{
                resolve({status: true});
            }
        })

    })

}

module.exports = router;
