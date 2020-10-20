export interface Controller {
  create(): Promise<any>;
  list(): Promise<any>;
  update(): Promise<any>;
  delete(): Promise<any>;
}
