module.exports = (app) => {
  app.get('/', (_req, res) => {
    res.json('Hello Wor1');
  });
};
