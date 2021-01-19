import { ICloundinaryResponse } from '../models/Cloudinary.interfaces';
import * as core from 'express-serve-static-core';

module.exports = (app: core.Express, cloudinary) => {
  app.get('/photos', (_req, res) => {
    cloudinary.api.resources((error, results: ICloundinaryResponse) => {
      if (error) {
        res.json(error);
      } else {
        res.json(results.resources);
      }
    });
  });
};
