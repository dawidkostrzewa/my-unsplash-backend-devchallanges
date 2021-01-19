import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import cloudinary from './config/cloudinary.config';

const app = express();
const port = process.env.PORT || 8000;

require('./routes/Main.route')(app);
require('./routes/Photos.route')(app, cloudinary);

app.get('/upload', (_req, res) => {
  cloudinary.uploader.upload('pizza2.jpeg', function (error, result) {
    console.log(result, error);
  });
  res.json('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
