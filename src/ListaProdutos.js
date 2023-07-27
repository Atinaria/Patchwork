import React from 'react';

function ListaProdutos({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="lista-produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>Valor: R$ {produto.valor}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;
