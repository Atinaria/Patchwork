import React, { useState, useEffect } from 'react';
import './App.css';
import Carrinho from './Carrinho'; 

const produtosDisponiveis = [
    {
      id: 1,
      nome: "Colcha de Casal Ref.: 0001",
      valor: 1500.00,
      quantidade: 1,
      descricao: "Colcha de casal com blocos nine patch coloridos",
      imagem: "/img/Cobertores casal/nine patch.jpg"
    },
    {
      id: 2,
      nome: "Colcha de Casal Ref.: 0002",
      valor: 1480.00,
      quantidade: 1,
      descricao: "Colcha de casal com bloco de tiras entrelaçadas nas cores da paleta marrom",
      imagem: "/img/Cobertores casal/bloco em tiras.jpg"
    },
    
    {
      id: 3,
      nome: "Caminho de mesa Ref.: 0001",
      valor: 280.00,
      quantidade: 1,
      descricao: "Caminho de mesa com a técnica trança francesa com a paleta de cores vermelha",
      imagem: "/img/Caminho de mesa/trança francesa.jpg"
    },

    {
      id: 4,
      nome: "Caminho de mesa Ref.: 0002",
      valor: 295.00,
      quantidade: 1,
      descricao: "Caminho de mesa com versão do bloco cabana de toras, com as cores laranja, verde, vermelho e branco",
      imagem: "/img/Caminho de mesa/laranja, verde, vermelho e branco.jpg"
    },

    {
      id: 5,
      nome: "Jogo americano Floral",
      valor: 180.00,
      quantidade: 1,
      descricao: "Jogo americano com retângulo central floral e quadrados em cada ponta da peça, intercalados por tiras brancas e rosas",
      imagem: "/img/Jogo americano/rosa.jpg"
    },

    {
      id: 6,
      nome: "Jogo americano triângulos azuis",
      valor: 180.00,
      quantidade: 1,
      descricao: "Jogo americano com quadrado central e triângulos laterais com a paleta de cores azul",
      imagem: "/img/Jogo americano/azul.jpg"
    },

    {  
      id: 7,
      nome: "Bolsa Ref.: 0001",
      valor: 180.00,
      quantidade: 1,
      descricao: "Bolsa de tiras com cores da paleta vermelha",
      imagem: "/img/Bolsas/Bolsa tiras paleta vermelha.jpg" 
    },

    {  
      id: 8,
      nome: "Bolsa Ref.: 0002",
      valor: 140.00,
      quantidade: 1,
      descricao: "Bolsa com versão do bloco Cabana de toras em branco, marrom, verde e vermelho",
      imagem: "/img/Bolsas/Bolsa bloco log cabin.jpg"
    },
  ];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);
  
  function adicionarAoCarrinho(produto) {
    const produtoExistente = carrinho.find(item => item.nome === produto.nome);
    if (produtoExistente) {
      setCarrinho(carrinho.map(item => 
        item.nome === produto.nome ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }
    
  return (
    <div className="App">
      <div className="container">
      <h1>Produtos Disponíveis</h1>
      <ul className="lista-produtos">
        {produtosDisponiveis.map((produto, index) => (
          <li className="produto-card" key={produto.id}>
            <img className="produto-img" src={produto.imagem} alt={produto.nome} />
            <h3 className="produto.nome">{produto.nome}</h3>
            <p className="produto-descricao">{produto.descricao}</p>
            <p className="produto-preco">Valor: R$ {produto.valor.toFixed(2)}</p>
            <button className="botao-adicionar" onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
      <h1>Carrinho de Compras</h1>
        {carrinho.length === 0 ? (
          <p>Nenhum item no carrinho</p>
        ) : (
          <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} /> 
        )}
      </div>
    </div>
  );
}

export default App;