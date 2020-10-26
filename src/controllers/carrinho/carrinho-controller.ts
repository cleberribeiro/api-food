import { Request, Response } from 'express';
import { OnAdd } from '../../protocols/actions';
import connection from '../../database/connection';
import { v4 as uuidv4 } from 'uuid';

export class CarrinhoController implements OnAdd {
  async add(request: Request, response: Response) {
    try {
      // Verifica se existe um carrinho no banco de dados
      // Caso exista o carrinho: pega o id e grava na
      // tabela carrinho_produto junto com a quantidade e o id do produto
      // Caso não exista deve ser cirado o carrinho, pegar o id e gravar na
      // tabela carrinho_produto junto com a quantidade e o id do produto
      const { id_produto, qtd } = request.params;
      const carrinho = await connection().from('carrinhos').select('id');
      console.log('DBG[request.params]', request.params);
      
      console.log('DBG[carrinho]', carrinho);
      // if (!carrinho.id) {
      //   const trx = await connection.transaction();

      //   const books = [
      //     {title: 'Canterbury Tales'},
      //     {title: 'Moby Dick'},
      //     {title: 'Hamlet'}
      //   ];

      //   trx('carrinhos')
      //     .insert({token: uuidv4() }, 'id')
      //     .then((id) => {
      //       const compras = { id_produto, qtd, id }
      //       return trx('books').insert(books);
      //     })
      //     .then(trx.commit)
      //     .catch(trx.rollback);
      // }

      return Promise.resolve(
        response.json({ message: 'Produto criado com sucesso.' })
      );
    } catch (error) {
      return Promise.reject(response.json(error));
    }
  }
}
