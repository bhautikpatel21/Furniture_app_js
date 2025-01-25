// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req,file, cd) {
//         cd(null,'images')
//     },
//     filename: function (req, file ,cd) {
//         cd(null,`${Date.now()}_${file.originalname}`);
//     }
// })
// exports.upload = multer({ storage: storage})

// Main multer 

const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Ensure the directory exists
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, imagesDir); // Use the absolute path
    },
    filename: function (req, file, cd) {
        cd(null, `${Date.now()}_${file.originalname}`);
    }
});

exports.upload = multer({ storage: storage });
