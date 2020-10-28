import { Request, Response } from 'express';
import { OnAdd } from '../../protocols/actions';
import connection from '../../database/connection';
import { v4 as uuidv4 } from 'uuid';

export class CarrinhoController implements OnAdd {
  async add(request: Request, response: Response) {
    try {
      let id;
      const { id_produto, qtd } = request.params;
      const carrinho = await connection('carrinhos').select('id');
      if (carrinho.length === 0) {

        const trx = await connection.transaction();
        trx('carrinhos')
          .insert({ token: uuidv4() }, 'id')
          .then((id) => {
            return trx('carrinho_produto').insert({
              id_carrinho: id,
              id_produto: request.params.id_produto,
              qtd: request.params.qtd,
            });
          })
          .then(trx.commit)
          .catch(trx.rollback);
        return Promise.resolve(
          response.json({
            id_carrinho: id,
          })
        );
      } else {
        await connection('carrinho_produto').insert({
          id_carrinho: carrinho[0].id,
          id_produto: request.params.id_produto,
          qtd: request.params.qtd,
        });

        return Promise.resolve(
          response.json({
            id_carrinho: carrinho[0].id,
          })
        );
      }
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
