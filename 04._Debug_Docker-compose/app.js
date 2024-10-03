import express from 'express';
const app = express();

import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'db',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }
});


app.get('/', (req, res) => {
    res.send({ data: `Hello from ${process.env.NODE_ENV}!`});
});

app.listen(80, () => {
    console.log('App running on port 80');
});
