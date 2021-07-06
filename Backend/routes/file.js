var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null,file.originalname.replace(/\s/g, ''));
    }
});
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 6,
    }
});
router.post('/upload', upload.single('file'), (req, res, next) => {
    try {
        return res.status(201).json({
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;
