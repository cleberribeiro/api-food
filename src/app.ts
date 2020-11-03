import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs'
import cors from 'cors';
import bodyParser from 'body-parser';

import routesConfig from './routes/routes.config';
import { errors } from 'celebrate';

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errors());

routesConfig(app);

export default app;
