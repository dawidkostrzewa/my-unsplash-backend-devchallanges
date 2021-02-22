import cloudinary from '../config/cloudinary.config';
import uploadFile from '../middleware/upload';
import { Request, Response } from 'express';
import fs from 'fs';
import Error from '../models/Error.model';

export async function getAllPhotos(_req: Request, res: Response) {
    try {
        const search = await cloudinary.search.with_field('tags').execute();
        return res.json(search);
    } catch (error) {
        return res.json(error.error);
    }
}

export async function addPhoto(req: Request, res: Response) {
    const file = await upload(req, res);
    if (file) {
        cloudinary.uploader.upload(file.path, { tags: req.body.tags || '' }, function (error, result) {
            fs.unlink(file.path, (err) => console.log(err));
            if (error) {
                return res.json(error);
            } else {
                return res.json(result);
            }
        });
    }
}

export async function upload(req, res: Response) {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            res.status(400).send(new Error('Please upload a file!'));
            return false;
        }

        return req.file;
    } catch (err) {
        res.status(500).send(new Error(`Could not upload the file: ${req.file?.originalname}. ${err}`));

        return false;
    }
}
