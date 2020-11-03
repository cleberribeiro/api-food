import { Request, Response } from 'express';

export interface OnCreate {
  create(request: Request, response: Response): Promise<Response>;
}
export interface OnList {
  list(request: Request, response: Response): Promise<Response>;
}
export interface OnUpdate {
  update(request: Request, response: Response): Promise<Response>;
}
export interface OnDelete {
  delete(request: Request, response: Response): Promise<Response>;
}
export interface OnAdd {
  add(request: Request, response: Response): Promise<Response>;
}
