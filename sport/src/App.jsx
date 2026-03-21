import "./App.css";
import { useState } from "react";
import Marcas from "./components/Marcas";
import Header from "./components/Header";
import Carossel from "./components/Carossel";
import CardLoja from "./components/CardLoja";

import { catalogo_corre, catalogo_adzero } from "./data.js/node";

function App() {
  const [busca, setBusca] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  const todosProdutos = [...catalogo_corre, ...catalogo_adzero];

  const filtrados = todosProdutos.filter(
    (item) =>
      item.title.toLowerCase().includes(busca.toLowerCase()) &&
      (marcaSelecionada === "" || item.marca === marcaSelecionada),
  );

const limparFiltros = () => {
  setBusca("");
  setMarcaSelecionada(""); 
};
  return (
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
          <h1 className="titulo-produtos">TENIS OLYMPIKUS CORRE 4</h1>

          <div className="lista-cards">
            {catalogo_corre.map((item) => (
              <CardLoja
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                banner={item.banner}
              />
            ))}
          </div>

          <h1 className="titulo-produtos">TENIS ADIDAS</h1>

          <div className="lista-cards">
            {catalogo_adzero.map((item) => (
              <CardLoja
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                banner={item.banner}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
