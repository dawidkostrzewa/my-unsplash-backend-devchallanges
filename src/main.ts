import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.C_API_KEY,
  api_secret: process.env.C_API_SECRET,
});

const app = express();
const port = 8000;

require('./routes/Main.route')(app, cloudinary);

app.get('/upload', (_req, res) => {
  cloudinary.uploader.upload('pizza2.jpeg', function (error, result) {
    console.log(result, error);
  });
  res.json('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
