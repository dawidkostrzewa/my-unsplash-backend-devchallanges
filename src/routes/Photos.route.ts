import * as core from 'express-serve-static-core';
import { addPhoto, getAllPhotos } from '../controllers/Photo.controller';

const photoRoutes = (app: core.Express) => {
    app.route('/photos').get(getAllPhotos).post(addPhoto);
};

export default photoRoutes;
