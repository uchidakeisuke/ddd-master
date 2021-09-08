import 'module-alias/register';
import express from 'express';
import { router } from './routes/index';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const port = 3000;

app.listen(port);

console.log(`Express is listening on port ${port}`);
