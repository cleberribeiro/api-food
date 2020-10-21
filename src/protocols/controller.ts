import { Request, Response } from 'express';
export interface Controller {
  create(request: Request, response: Response): Response;
  list(request: Request, response: Response): Response;
  update(request: Request, response: Response): Response;
  delete(request: Request, response: Response): Response;
}
