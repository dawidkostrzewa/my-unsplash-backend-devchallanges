import cloudinary from '../config/cloudinary.config';
import uploadFile from '../middleware/upload';
import { Request, Response } from 'express';

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
        //TODO: przeniesci do controllera cloudinary
        cloudinary.uploader.upload(file.path, { tags: req.body.tags || '' }, function (error, result) {
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
            //TODO: ujednolicic bledy
            res.status(400).send({ message: 'Please upload a file!' });
            return false;
        }

        return req.file;
    } catch (err) {
        //TODO: ujednolicic bledy
        res.status(500).send({
            message: `Could not upload the file: ${req.file?.originalname}. ${err}`
        });
        return false;
    }
}
