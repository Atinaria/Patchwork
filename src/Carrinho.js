import React from 'react';

function Carrinho({ carrinho, setCarrinho }) {
  function removerDoCarrinho(index) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  }

  function aumentarQuantidade(produto) {
    const novoCarrinho = carrinho.map(item =>
      item.nome === produto.nome ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(produto) {
    const novoCarrinho = carrinho.map(item =>
      item.nome === produto.nome
        ? { ...item, quantidade: Math.max(item.quantidade - 1, 0) }
        : item
    );
    setCarrinho(novoCarrinho);
  }

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map((produto, index) => 
          <li key={index}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>Valor: R$ {produto.valor}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <button onClick={() => removerDoCarrinho(index)}>Remover</button>
            <button onClick={() => aumentarQuantidade(produto)}>+</button>
            <button onClick={() => diminuirQuantidade(produto)}>-</button>
          </li>
        )}
      </ul>
      <p>Total da Compra: R$ {calcularTotal(carrinho).toFixed(2)}</p>
    </div>
  );
}

function calcularTotal(carrinho) {
  const total = carrinho.reduce((acc, produto) => acc + produto.valor * produto.quantidade, 0);
  return total;
}

export default Carrinho;

