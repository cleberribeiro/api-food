CREATE DATABASE IF NOT EXISTS api_food;

-- api_food.produtos definition

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `descricao` text,
  `preco` float(8,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;


-- api_food.carrinhos definition

CREATE TABLE IF NOT EXISTS `carrinhos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- api_food.carrinho_produto definition

CREATE TABLE IF NOT EXISTS `carrinho_produto` (
  `id_carrinho` int(10) unsigned DEFAULT NULL,
  `id_produto` int(10) unsigned DEFAULT NULL,
  `qtd` int(11) NOT NULL,
  KEY `carrinho_produto_id_carrinho_foreign` (`id_carrinho`),
  KEY `carrinho_produto_id_produto_foreign` (`id_produto`),
  CONSTRAINT `carrinho_produto_id_carrinho_foreign` FOREIGN KEY (`id_carrinho`) REFERENCES `carrinhos` (`id`),
  CONSTRAINT `carrinho_produto_id_produto_foreign` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- api_food.pedidos definition

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `forma_pagamento` varchar(200) NOT NULL,
  `endereco_entrega` varchar(255) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `valor_total` float(8,2) NOT NULL,
  `status` enum('novo','aceito','saiu para entrega','entregue','cancelado') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


-- api_food.pedido_itens definition

CREATE TABLE IF NOT EXISTS `pedido_itens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_produto` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `preco` float(8,2) DEFAULT NULL,
  `qtd` int(11) DEFAULT NULL,
  `pedido_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_itens_pedido_id_foreign` (`pedido_id`),
  CONSTRAINT `pedido_itens_pedido_id_foreign` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Burger', 'Hambúrguer clássico', 8.99, '', 'burger, carne, bacon, queijo', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Misto Quente', 'Misto quente de forno a minha moda', 18.99, '', 'presunto, requeijão, mussarela, tomate', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Sanduíche Natural', 'Sanduíche natural de frango bem temperado', 4.99, '', 'frango, cebola, tomate, cenoura, alface', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Cachorro Quente', 'Cachorro quente clássico', 7.49, '', 'salsicha, tomate, cebola, ervilha, batata palha, milho verde', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Bauru de Forno', 'Bauru de Forno', 10.49, '', 'pão, presuto, tomate, orégano, ovos, queijo, presuto', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Cachorro Quente Especial', 'Cachorro Quente Especial', 12.99, '', 'tomate, mostarda, queijo, salsicha, batata palha', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Coxinha de Mandioca', 'Coxinha de Mandioca', 2.99, '', 'mandioca, frango, farinha, trigo, carne seca, cebola', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Suco de Cenoura', 'Suco de Cenoura', 4.79, '', 'cenoura, laranja, limão, açúcar', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Suco de Laranja com Morango', 'Suco de laranja com morango', 5.19, '', 'laranja, morango, açúcar', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Suco de Laranja', 'Suco de laranja clássico', 4.99, '', 'laranja, açúcar', true);
INSERT INTO api_food.produtos
(nome, descricao, preco, imagem, tags, status)
VALUES('Combo Lanche Feliz', 'Hambúrguer clássico + Suco de laranja clássico', 12.99, '', 'burger, carne, bacon, queijo, laranja, açúcar, suco, lanche, combo', true);
