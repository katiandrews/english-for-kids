import cookieSession from 'cookie-session';
import express from 'express';
import cors from 'cors';
import log from './logger';
import connect from './db/connect';
import config from './config/default';

const PORT = config.port;

const app = express();
app.use(cors());
app.use(cookieSession({
  name: 'session',
  keys: ['secretKey'],
  sameSite: 'none',
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', require('./routes/auth.routes'));
app.use('/api/categories', require('./routes/categories.routes'));
app.use('/api/words', require('./routes/words.routes'));

app.listen(PORT, () => {
  log.info(`server listing on port ${PORT}`);
  connect();
});
