import './CardLoja.css'
import { ShoppingCart, Heart } from 'lucide-react'

export default function Cards({id,title,price,category,banner,onClick,isFavorito,toggleFavorito}) {
  return (
    <div className="card-loja" onClick={onClick}>
      
      <div className="img-box">
        
        
        <button
          className="btn-fav"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorito(id);
            console.log(id);
          }}
        >
          <Heart
            size={18}
            color={isFavorito ? "red" : "white"}
            fill={isFavorito ? "red" : "none"}
          />
        </button>

        <img src={banner} alt={title} className="card-img" />

        <div className="card-info">
          <h4>{title}</h4>
          <p>{category}</p>
          <p>R$ {price}</p>

          <button className='play-button'>
            <ShoppingCart size={14}/>
          </button>
        </div>

      </div>
    </div>
  )
}