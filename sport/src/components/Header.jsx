import "./Header.css";
import { Menu, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ setBusca}) {
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
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Esportes
            </Link>
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Acessórios
            </Link>
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Treino
            </Link>
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Equipamento
            </Link>
            <Link to="/carrinho" onClick={() => setMenuAberto(false)}>
              Carrinho
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
        <Link to="/">Esportes</Link>
        <Link to="/">Acessórios</Link>
        <Link to="/">Treino</Link>
        <Link to="/">Equipamentos</Link>
        <Link to="/carrinho">Carrinho</Link>
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