import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
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
  catalogo_academia,
  catalogo_moda,
  catalogo_modaFem,
  catalogo_esportes,
} from "./data.js/node";

function App() {
  const [busca, setBusca] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [generoSelecionado, setGeneroSelecionado] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const [favoritos, setFavoritos] = useState(() => {
    const favSalvo = localStorage.getItem("favoritos");
    return favSalvo ? JSON.parse(favSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const todosProdutos = [
    ...catalogo_corre,
    ...catalogo_adzero,
    ...catalogo_nike,
    ...catalogo_mizuno,
    ...catalogo_academia,
    ...catalogo_moda,
    ...catalogo_modaFem,
    ...catalogo_esportes,
  ];

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

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

  //  FILTRO COMPLETO
  const filtrados = todosProdutos.filter(
    (item) =>
      item.title.toLowerCase().includes(busca.toLowerCase()) &&
      (marcaSelecionada === "" || item.marca === marcaSelecionada) &&
      (categoriaSelecionada === "" || item.category === categoriaSelecionada),
  );

  //  LIMPA TUDO
  const limparFiltros = () => {
    setBusca("");
    setMarcaSelecionada("");
    setCategoriaSelecionada("");
  };

  const limparProdutos = () => {
    setProdutoSelecionado(null);
    setTamanhoSelecionado("");
    setGeneroSelecionado("");
  };

  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <div className="app">
            <Header setBusca={setBusca} />

            <Carossel />

            <h2 className="titulo-secao">NAVEGUE POR MARCAS</h2>

            {/*  PASSA CATEGORIA*/}
            <Marcas
              setMarcaSelecionada={setMarcaSelecionada}
              setCategoriaSelecionada={setCategoriaSelecionada}
            />

            {/* BOTÃO LIMPAR */}
            {(busca || marcaSelecionada || categoriaSelecionada) && (
              <button className="btn-limpar" onClick={limparFiltros}>
                Limpar filtros
              </button>
            )}

            {/* RESULTADO FILTRADO */}
            {(busca || marcaSelecionada || categoriaSelecionada) && (
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

            {/* CATÁLOGO */}
            {!busca && !marcaSelecionada && !categoriaSelecionada && (
              <>
                <h1 className="titulo" id="Catalogo">
                  CATÁLOGO
                </h1>

                {[
                  { titulo: "OLYMPIKUS", lista: catalogo_corre },
                  { titulo: "ADIDAS", lista: catalogo_adzero },
                  { titulo: "NIKE", lista: catalogo_nike },
                  { titulo: "MIZUNO", lista: catalogo_mizuno },
                  {
                    titulo: "ACADEMIA",
                    lista: catalogo_academia,
                    id: "Academia",
                  },
                  {
                    titulo: "MODA CASUAL MASCULINA",
                    lista: catalogo_moda,
                    id: "Moda Casual",
                  },
                  {
                    titulo: "MODA CASUAL FEMININA",
                    lista: catalogo_modaFem,
                    id: "Moda Casual",
                  },
                  {
                    titulo: "ESPORTES",
                    lista: catalogo_esportes,
                    id: "Esportes",
                  },
                ].map((secao, index) => (
                  <div key={index} id={secao.id || ""}>
                    <h1 className="titulo-produtos">{secao.titulo}</h1>

                    <div className="lista-cards">
                      {secao.lista.map((item) => (
                        <CardLoja
                          key={item.id}
                          {...item}
                          onClick={() => abrirProduto(item)}
                          isFavorito={favoritos.includes(item.id)}
                          
                          toggleFavorito={toggleFavorito}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* MODAL */}
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


                  {produtoSelecionado.tam && (
                    <>
                      <p>Selecione o tamanho</p>

                      <div className="tamanhos">
                        {produtoSelecionado.tam.map((tamanho) => (
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

                      {!tamanhoSelecionado && (
                        <p style={{ color: "red" }}>Selecione um tamanho</p>
                      )}
                    </>
                  )}

                  <button
                    className="add"
                    onClick={adcionarAoCarrinho}
                    disabled={produtoSelecionado.tam && !tamanhoSelecionado}
                  >
                    <p>Adicionar ao carrinho</p>
                    <ShoppingCart size={14} />
                  </button>

                  <button className="btn-limpar" onClick={limparProdutos}>
                    Fechar
                  </button>
                </div>
              </div>
            )}

            <Footer />
          </div>
        }
      />

      {/* CARRINHO */}
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
