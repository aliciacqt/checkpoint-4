const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/posters"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-poster-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadPoster = (req, res, next) => {
  upload.single("poster")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (!req.file) {
        req.body.poster = null;
      } else {
        req.body.poster = req.file.filename;
      }
      next();
    }
  });
};

module.exports = { uploadPoster };
