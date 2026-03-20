import './Header.css'
import { Search } from 'lucide-react'
import logo from "../assets/logo.png"

export default function Header({ setBusca }) {
  return (
    <div className="header">
      
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Sport Zone</h2>
      </div>

      <div className="conteudo">
        <div className="search-box">
          

          <input 
            type="text" 
            placeholder="Buscar..."
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}