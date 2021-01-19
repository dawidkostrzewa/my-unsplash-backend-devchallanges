import { ICloundinaryResponse } from '../models/Cloudinary.interfaces';

module.exports = (app, cloudinary) => {
  app.get('/', (_req, res) => {
    res.json('Hello Wor1');
  });

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
