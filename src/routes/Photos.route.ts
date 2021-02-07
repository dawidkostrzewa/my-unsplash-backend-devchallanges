import * as core from 'express-serve-static-core';
import { getAllPhotos } from '../controllers/Photo.controller';

const photoRoutes = (app: core.Express) => {
    app.route('/photos').get(getAllPhotos);
};

export default photoRoutes;
