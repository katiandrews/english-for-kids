import express from 'express';
import config from 'config';
import cors from 'cors';
import log from './logger/index';
import connect from './db/connect';

const PORT = config.get('port');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/auth.routes'));
app.use('/api/categories', require('./routes/categories.routes'));

app.listen(PORT, () => {
  log.info(`server listing on port ${PORT}`);
  connect();
});
