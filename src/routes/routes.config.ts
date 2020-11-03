import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export default (app: Express): void => {
  const router = Router();
  app.use('/api/v1', router);
  readdirSync(`${__dirname}`).map(async (file) => {
    if (!file.includes('.config.') && !file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
