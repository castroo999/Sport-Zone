import "./Header.css";
import { Menu, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ setBusca }) {
  const [menuAberto, setMenuAberto] = useState(false);

 const irPara = (id) => {
  const elemento = document.getElementById(id);

  if (!elemento) return;

  const target = elemento.offsetTop - 100;
  const start = window.scrollY;
  const duration = 1200; 
  let startTime = null;

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = timeElapsed / duration;

    
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, start + (target - start) * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
};

  const navegar = useNavigate();

  return (
    <header className="header">
      <div className="left">
        <Menu
          size={26}
          className="menu-icon"
          onClick={() => setMenuAberto(!menuAberto)}
        />

        {menuAberto && (
          <div className={`itens-botao ${menuAberto ? "ativo" : ""}`}>
            <button onClick={() => irPara("Catalogo")}>Catalogo</button>
            <button onClick={() => irPara("Academia")}>Academia</button>
            <button onClick={() => irPara("Moda Casual")}>Moda Casual</button>
            <button onClick={() => irPara("Esportes")}>Esportes</button>
            <Link to="/carrinho" onClick={() => setMenuAberto(false)}>
              Carrinho
            </Link>
            <Link to="/Desejo" onClick={() => setMenuAberto(false)}>
              Lista de desejos
            </Link>
          </div>
        )}

        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Sport Zone</h2>
          <p>Eleve seu jogo. Supere seus limite</p>
        </div>
      </div>

      <nav className="nav">
        <button onClick={() => irPara("Catalogo")}>Catalogo</button>
        <button onClick={() => irPara("Academia")}>Academia</button>
        <button onClick={() => irPara("Moda Casual")}>Moda Casual</button>
        <button onClick={() => irPara("Esportes")}>Esportes</button>
        <button onClick={() => irPara("Desejos")}>Lista de desejos</button>
        <button onClick={() => navegar("/carrinho")}>Carrinho</button>
      </nav>

      <div className="right">
        <div className="search-box">
          <Search size={18} className="search-icon" />

          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
