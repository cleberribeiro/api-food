import { Request, Response } from 'express';
import { OnAdd } from '../../protocols/actions';
import connection from '../../database/connection';
import { v4 as uuidv4 } from 'uuid';

export class CarrinhoController implements OnAdd {
  id_carrinho: any;
  async add(request: Request, response: Response) {
    try {
      let _iid;
      const { id_produto, qtd } = request.body;
      const produto = await connection('produtos')
        .select('id')
        .where({ id: id_produto });
      if (produto.length === 0) {
        return Promise.resolve(
          response.json({
            message: 'Produto informado não existe!',
          })
        );
      }

      const carrinho = await connection('carrinhos').select('id');
      if (carrinho.length === 0) {
        const trx = await connection.transaction();
        await trx('carrinhos')
          .insert({ token: uuidv4() })
          .then((id) => {
            _iid = id[0];
            return trx('carrinho_produto').insert({
              id_carrinho: id[0],
              id_produto: id_produto,
              qtd: qtd,
            });
          })
          .then(trx.commit)
          .catch(trx.rollback);

        return Promise.resolve(
          response.json({
            id_carrinho: _iid,
          })
        );
      } else {
        await connection('carrinho_produto').insert({
          id_carrinho: carrinho[0].id,
          id_produto: id_produto,
          qtd: qtd,
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
