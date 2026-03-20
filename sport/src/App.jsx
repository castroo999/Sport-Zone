import "./App.css"
import { useState } from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Carossel from "./components/Carossel"
import CardLoja from "./components/CardLoja"

import { catalogo_corre, catalogo_adzero } from "./data.js/node"

function App() {

  
  const [busca, setBusca] = useState("")

  
  const todosProdutos = [...catalogo_corre, ...catalogo_adzero]

  
  const filtrados = todosProdutos.filter(item =>
    item.title.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <>
      <Header setBusca={setBusca} />
      <Navbar />
      <Carossel />

      
      {busca && (
        <>
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            Resultados da busca
          </h1>

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
              <p style={{ color: "white" }}>Nenhum produto encontrado</p>
            )}
          </div>
        </>
      )}

      
      {!busca && (
        <>
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            TENIS OLYMPIKUS CORRE 4
          </h1>

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

          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            TENIS ADIDAS
          </h1>

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
    </>
  )
}

export default App