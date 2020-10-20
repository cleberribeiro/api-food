import { Request, Response } from "express";
export interface Controller {
  create(request: Request, response: Response): Promise<any>;
  list(request: Request, response: Response): Promise<any>;
  update(request: Request, response: Response): Promise<any>;
  delete(request: Request, response: Response): Promise<any>;
}
