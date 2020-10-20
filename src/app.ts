import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routesConfig from './routes/routes.config';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routesConfig(app);

export default app;
