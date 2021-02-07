import * as core from 'express-serve-static-core';

const mainRoute = (app: core.Express) => {
    app.get('/', (_req, res) => {
        res.json('Hello Wor1');
    });
};

export default mainRoute;
