import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import connection from '../../database/connection';
export class PedidoController {

  async finalizarPedido(request: Request, response: Response) {
    try {
      

      return Promise.resolve(response.json({ message: 'finalizarPedidoo.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async listarPedidos(request: Request, response: Response) {
    try {
      

      return Promise.resolve(response.json({ message: 'listarPedidos.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

  async atualizarStatusPedido(request: Request, response: Response) {
    try {
      

      return Promise.resolve(response.json({ message: 'atualizarStatusPedido.' }));
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }

}
