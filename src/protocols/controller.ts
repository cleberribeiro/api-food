interface Controller {
  create(data: any): Promise<any>;
  list(): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<any>;
}
