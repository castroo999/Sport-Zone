import './Header.css'
import { Search } from 'lucide-react'
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <div className="header">
      
      
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

        <h2>Sport Zone</h2>

     
      <div className="conteudo">
        <div className="search-box">
          
          <input type="text" placeholder="buscar..." />
        </div>
      </div>

    </div>
  )
}