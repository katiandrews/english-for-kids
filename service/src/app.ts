import cookieSession from 'cookie-session';
import express from 'express';
import cors from 'cors';
import connect from './db/connect';
import config from './config/default';
import { AuthRoutes } from './routes/auth.routes';
import { log } from './logger';
import { CategoriesRoutes } from './routes/categories.routes';
import { WordsRouter } from './routes/words.routes';

const authentication = new AuthRoutes();
const categories = new CategoriesRoutes();
const words = new WordsRouter();

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

app.use('/', authentication.router);
app.use('/', categories.router);
app.use('/', words.router);

app.listen(PORT, () => {
  log.info(`server listing on port ${PORT}`);
  connect();
});
