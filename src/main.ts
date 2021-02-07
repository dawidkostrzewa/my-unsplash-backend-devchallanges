import express from 'express';
import dotenv from 'dotenv';
import cloudinary from './config/cloudinary.config';
import photoRoutes from './routes/Photos.route';
import mainRoute from './routes/Main.route';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

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
