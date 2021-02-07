import cloudinary from '../config/cloudinary.config';

export async function getAllPhotos(_req, res) {
    try {
        const search = await cloudinary.search.with_field('tags').max_results(10).execute();
        return res.json(search);
    } catch (error) {
        return res.json(error.error);
    }
}

export function addPhoto(req, res) {
    const data = req.body;
    console.log(data);
    cloudinary.uploader.upload(data.title, { tags: data.tags }, function (error, result) {
        if (error) {
            return res.json(error);
        } else {
            return res.json(result);
        }
    });
}
