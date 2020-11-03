import { Request, Response } from 'express';
export interface Controller {
  create(request: Request, response: Response): Promise<Response>;
  list(request: Request, response: Response): Promise<Response>;
  update(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
}
