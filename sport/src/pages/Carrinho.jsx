import "./Carrinho.css";
import {Search} from 'lucide-react'
export default function Carrinho() {
  return (
    <div className="carrinho">
      <h1>Bem vindo ao seu carrinho 🛒!</h1>
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="buscar..." />
      </div>
    </div>
  );
}
