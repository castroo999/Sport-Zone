import { PiSneakerMoveBold } from "react-icons/pi";
import './App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Carossel from "./components/Carossel"
import CardLoja from "./components/CardLoja"
import { catalogo } from "./data.js/node"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Carossel />
      <h1><center>TENIS  <PiSneakerMoveBold size={40}/></center></h1>
      <div className="lista-cards">
        {catalogo.map((item) => (
          <CardLoja
            key={item.id}
            title={item.title}
            category={item.category}
            banner={item.banner}
          />
        ))}
      </div>
    </>
  )
}

export default App