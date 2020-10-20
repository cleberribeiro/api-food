import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
export class ProdutoController implements Controller {
    create(request: Request, response: Response) {
        console.log(request.body);
        return Promise.resolve(response.json({ message: 'Deu certo man...' }));
    }
    list(request: Request, response: Response) {
        return Promise.resolve(`Chegou aqui meu velho`);
    }
    update(request: Request, response: Response) {
        return Promise.resolve(null);
    }
    delete(request: Request, response: Response) {
        return Promise.resolve(null);
    }
}