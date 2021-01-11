import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_req, res) => {
  res.status(404).json('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
