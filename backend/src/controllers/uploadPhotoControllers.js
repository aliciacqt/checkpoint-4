const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/photos"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-photo-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadPhoto = (req, res, next) => {
  upload.single("fileName")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (!req.file) {
        req.body.fileName = null;
      } else {
        req.body.fileName = req.file.filename;
      }
      next();
    }
  });
};

module.exports = { uploadPhoto };
