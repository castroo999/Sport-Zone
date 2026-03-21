import "./Header.css";
import { Menu, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Header({ setBusca }) {
  const [menuAberto, setMenuAberto] = useState(false);
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
            <a href="#" onClick={() => setMenuAberto(false)}>
              Esportes
            </a>
            <a href="#" onClick={() => setMenuAberto(false)}>
              Acessórios
            </a>
          </div>
        )}

        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Sport Zone</h2>
          <br></br>
          <p>Eleve seu jogo. Supere seus limite</p>
        </div>
      </div>

      <nav className="nav">
        <a href="#">Esportes</a>
        <a href="#">Acessórios</a>
        <a href="#">Treino</a>
        <a href="#">Equipamentos</a>
        <a href="#">Infantil</a>
        
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
