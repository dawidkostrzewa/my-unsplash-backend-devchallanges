import { ICloundinaryResponse } from '../models/Cloudinary.interfaces';
import cloudinary from '../config/cloudinary.config';

export function getAllPhotos(_req, res) {
    cloudinary.api.resources((error, results: ICloundinaryResponse) => {
        if (error) {
            return res.json(error);
        } else {
            return res.json(results.resources);
        }
    });
}
