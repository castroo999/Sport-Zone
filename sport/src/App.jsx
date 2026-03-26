import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { IoIosMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useState, useEffect } from "react";

import Carrinho from "./pages/Carrinho";
import Marcas from "./components/Marcas";
import Header from "./components/Header";
import Carossel from "./components/Carossel";
import CardLoja from "./components/CardLoja";

import {
  catalogo_corre,
  catalogo_adzero,
  catalogo_nike,
  catalogo_mizuno,
  catalogo_variados,
} from "./data.js/node";

function App() {
  const [busca, setBusca] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [generoSelecionado, setGeneroSelecionado] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const todosProdutos = [
    ...catalogo_corre,
    ...catalogo_adzero,
    ...catalogo_nike,
    ...catalogo_mizuno,
    ...catalogo_variados,
  ];

  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const limparCarrinho = () => setCarrinho([]);

  
  const abrirProduto = (item) => {
    setProdutoSelecionado(item);
    setGeneroSelecionado("");
    setTamanhoSelecionado("");
  };

  const adcionarAoCarrinho = () => {
    const produtoFinal = {
      ...produtoSelecionado,
      tamanho: tamanhoSelecionado,
      genero: generoSelecionado,
    };

    setCarrinho([...carrinho, produtoFinal]);
    setProdutoSelecionado(null);
  };

  const removerItem = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const filtrados = todosProdutos.filter(
    (item) =>
      item.title.toLowerCase().includes(busca.toLowerCase()) &&
      (marcaSelecionada === "" || item.marca === marcaSelecionada)
  );

  const limparFiltros = () => {
    setBusca("");
    setMarcaSelecionada("");
  };

  const limparProdutos = () => {
    setProdutoSelecionado(null);
    setTamanhoSelecionado("");
    setGeneroSelecionado("");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Header setBusca={setBusca} />
            <Carossel />

            <h2 className="titulo-secao">NAVEGUE POR MARCAS</h2>
            <Marcas setMarcaSelecionada={setMarcaSelecionada} />

            {(busca || marcaSelecionada) && (
              <button className="btn-limpar" onClick={limparFiltros}>
                Limpar filtros
              </button>
            )}

            {(busca || marcaSelecionada) && (
              <>
                <h1 className="titulo-produtos">Produtos</h1>

                <div className="lista-cards">
                  {filtrados.length > 0 ? (
                    filtrados.map((item) => (
                      <CardLoja
                        key={item.id}
                        {...item}
                        onClick={() => abrirProduto(item)}
                      />
                    ))
                  ) : (
                    <p className="sem-produto">Nenhum produto encontrado</p>
                  )}
                </div>
              </>
            )}

            {!busca && !marcaSelecionada && (
              <>
                <h1 className="titulo">CATÁLOGO</h1>

                {[
                  { titulo: "OLYMPIKUS", lista: catalogo_corre },
                  { titulo: "ADIDAS", lista: catalogo_adzero },
                  { titulo: "NIKE", lista: catalogo_nike },
                  { titulo: "MIZUNO", lista: catalogo_mizuno },
                  { titulo: "ACADEMIA", lista: catalogo_variados  },
                ].map((secao, index) => (
                  <div key={index}>
                    <h1 className="titulo-produtos">{secao.titulo}</h1>

                    <div className="lista-cards">
                      {secao.lista.map((item) => (
                        <CardLoja
                          key={item.id}
                          {...item}
                          onClick={() => abrirProduto(item)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            
            {produtoSelecionado && (
              <div className="overlay">
                <div className="modal">
                  <img
                    src={produtoSelecionado.banner}
                    alt={produtoSelecionado.title}
                  />

                  <h2>{produtoSelecionado.title}</h2>
                  <p>{produtoSelecionado.category}</p>
                  <p>R$ {produtoSelecionado.price}</p>

                  
                  {produtoSelecionado.category === "tenis" && (
                    <>
                      <div className="generos">
                        <button
                          className={`genero ${
                            generoSelecionado === "Feminino" ? "ativo" : ""
                          }`}
                          onClick={() => setGeneroSelecionado("Feminino")}
                        >
                          <IoMdFemale size={30} color="pink" />
                        </button>

                        <button
                          className={`genero ${
                            generoSelecionado === "Masculino" ? "ativo" : ""
                          }`}
                          onClick={() => setGeneroSelecionado("Masculino")}
                        >
                          <IoIosMale size={30} color="blue" />
                        </button>
                      </div>

                      {!generoSelecionado && (
                        <p style={{ color: "red" }}>
                          Selecione um gênero
                        </p>
                      )}
                    </>
                  )}

                  
                  {produtoSelecionado.tam && (
                    <>
                      <p>Selecione o tamanho</p>

                      <div className="tamanhos">
                        {produtoSelecionado.tam.map((tamanho) => (
                          <button
                            key={tamanho}
                            onClick={() =>
                              setTamanhoSelecionado(tamanho)
                            }
                            className={`tamanho ${
                              tamanhoSelecionado === tamanho
                                ? "ativo"
                                : ""
                            }`}
                          >
                            {tamanho}
                          </button>
                        ))}
                      </div>

                      {!tamanhoSelecionado && (
                        <p style={{ color: "red" }}>
                          Selecione um tamanho
                        </p>
                      )}
                    </>
                  )}

                  
                  <button
                    className="add"
                    onClick={adcionarAoCarrinho}
                    disabled={
                      (produtoSelecionado.category === "tenis" &&
                        !generoSelecionado) ||
                      (produtoSelecionado.tam && !tamanhoSelecionado)
                    }
                  >
                    <p>Adicionar ao carrinho</p>
                    <ShoppingCart size={14} />
                  </button>

                  <button
                    className="btn-limpar"
                    onClick={limparProdutos}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        }
      />

      <Route
        path="/carrinho"
        element={
          <div className="app">
            <Header setBusca={setBusca} />
            <Carrinho
              carrinho={carrinho}
              removerItem={removerItem}
              limparCarrinho={limparCarrinho}
            />
          </div>
        }
      />
    </Routes>
  );
}

export default App;