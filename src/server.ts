import express, { NextFunction, Request, response, Response } from 'express';
import path from 'node:path';
import 'dotenv/config';
import session  from 'express-session';
import accessRoutes from './routes/access';
import articlesRoutes from './routes/articles';
import { request } from 'node:http';

const app = express();
const port = 3000;

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    throw new Error('SESSION_SECRET não foi definida no arquivo .env.')
}

app.use(express.json());

app.use(
    session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 1000 * 60 * 60,
        },
    }),
);

app.use('/style', express.static('style'));
app.use('/script', express.static('script'));
app.use('/image', express.static('image'));

function requireAccess(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (!request.session.authorizedEmail) {
    response.redirect('/pages/login.html');
    return;
  }

  next();
}

app.get(
  '/pages/article.html',
  requireAccess,
  (_request, response) => {
    response.sendFile(path.resolve('pages', 'article.html'));
  },
);

app.use('/pages', express.static('pages'));

app.use('/api/access', accessRoutes);
app.use('/api/articles', articlesRoutes);

app.listen(port, () => {
  console.log(`Servidor disponível em http://localhost:${port}`);
});