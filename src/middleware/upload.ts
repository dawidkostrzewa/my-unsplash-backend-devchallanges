import util from 'util';
import multer from 'multer';
import { UPLOAD_PATH } from '../config/config';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, UPLOAD_PATH);
    },
    filename: (_req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    }
});

const uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware;
