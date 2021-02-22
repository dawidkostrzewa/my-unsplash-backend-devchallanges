import * as core from 'express-serve-static-core';

const mainRoute = (app: core.Express) => {
    app.get('/', (_req, res) => {
        res.send('OK');
    });
};

export default mainRoute;
