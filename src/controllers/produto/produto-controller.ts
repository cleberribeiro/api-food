import { Produto } from "src/models/produto.model";

export class ProdutoController implements Controller {
    create(data: Produto) {
        return Promise.resolve(null);
    }
    list() {
        return Promise.resolve(null);
    }
    update() {
        return Promise.resolve(null);
    }
    delete() {
        return Promise.resolve(null);
    }
}