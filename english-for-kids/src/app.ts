import express from 'express';
import config from 'config';
import log from './logger/index';
import connect from './db/connect';

const PORT = config.get('port');

const app = express();

app.use('/api/auth', require('./routes/auth.routes'));

app.listen(PORT, () => {
  log.info(`server listing on port ${PORT}`);
  connect();
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res) {
//   res.send('hello world');
//   const word = new Word({ word: 'cat' });
//   word.save().then(() => console.log('word added'));
// })
