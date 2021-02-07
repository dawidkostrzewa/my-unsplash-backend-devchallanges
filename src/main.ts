import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

import cloudinary from './config/cloudinary.config';
import photoRoutes from './routes/Photos.route';
import mainRoute from './routes/Main.route';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

photoRoutes(app);
mainRoute(app);

app.get('/upload', (_req, res) => {
    cloudinary.uploader.upload('pizza2.jpeg', function (error, result) {
        console.log(result, error);
    });
    res.json('ok');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
