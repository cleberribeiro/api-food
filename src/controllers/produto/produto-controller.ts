import { Controller } from '../../protocols/controller';
export class ProdutoController implements Controller {
    create() {
        return Promise.resolve(null);
    }
    list() {
        return Promise.resolve(`Chegou aqui meu velho`);
    }
    update() {
        return Promise.resolve(null);
    }
    delete() {
        return Promise.resolve(null);
    }
}