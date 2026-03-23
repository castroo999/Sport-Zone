import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { IoIosMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useState } from "react";
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
  ];

  const filtrados = todosProdutos.filter(
    (item) =>
      item.title.toLowerCase().includes(busca.toLowerCase()) &&
      (marcaSelecionada === "" || item.marca === marcaSelecionada),
  );

  const limparFiltros = () => {
    setBusca("");
    setMarcaSelecionada("");
  };

  const limparProdutos = () => {
    setProdutoSelecionado(null);
  };

  return (
    <Routes>
      {/* PÁGINA PRINCIPAL */}
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
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        banner={item.banner}
                        onClick={() => setProdutoSelecionado(item)}
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
                <h1 className="titulo">CATALOGO TENIS</h1>

                {[
                  { titulo: "TENIS OLYMPIKUS CORRE 4", lista: catalogo_corre },
                  { titulo: "TENIS ADIDAS", lista: catalogo_adzero },
                  { titulo: "TENIS NIKE", lista: catalogo_nike },
                  { titulo: "TENIS MIZUNO", lista: catalogo_mizuno },
                ].map((secao, index) => (
                  <div key={index}>
                    <h1 className="titulo-produtos">{secao.titulo}</h1>
                    <div className="lista-cards">
                      {secao.lista.map((item) => (
                        <CardLoja
                          key={item.id}
                          title={item.title}
                          category={item.category}
                          price={item.price}
                          banner={item.banner}
                          onClick={() => setProdutoSelecionado(item)}
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

                  <button
                    className={`genero ${
                      generoSelecionado === "Feminino" ? "ativo" : ""
                    }`}
                    onClick={() => setGeneroSelecionado("Feminino")}
                  >
                    <IoMdFemale size={30} />
                  </button>

                  <button
                    className={`genero2 ${
                      generoSelecionado === "Masculino" ? "ativo" : ""
                    }`}
                    onClick={() => setGeneroSelecionado("Masculino")}
                  >
                    <IoIosMale size={30} />
                  </button>

                  <p>Selecione o tamanho</p>

                  <div className="tamanhos">
                    {(
                      produtoSelecionado.tam || ["34", "35", "36", "40", "43"]
                    ).map((tamanho) => (
                      <button
                        key={tamanho}
                        onClick={() => setTamanhoSelecionado(tamanho)}
                        className={`tamanho ${
                          tamanhoSelecionado === tamanho ? "ativo" : ""
                        }`}
                      >
                        {tamanho}
                      </button>
                    ))}
                  </div>

                  <button className="add">
                    <p>Adicionar ao carrinho</p>
                    <ShoppingCart size={14} />
                  </button>

                  <button className="btn-limpar" onClick={limparProdutos}>
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        }
      />

      
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default App;
