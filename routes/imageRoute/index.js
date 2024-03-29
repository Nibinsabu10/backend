import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/image", upload.single("file"), async (req, res) => {
  res.json({ url: `http://localhost:4000/${req.file.filename}` });
});

export default router;

// import express from "express";
// import multer from "multer";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/", upload.single("file"), (req, res) => {
//   res.status(201).json({
//     message: "File uploaded successfully",
//     filename: req.file.filename,
//   });
// });
// export default router;
