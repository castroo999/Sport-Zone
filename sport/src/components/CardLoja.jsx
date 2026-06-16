import "./CardLoja.css";
import { ShoppingCart, Heart, Star, Flame, Tag } from "lucide-react";

export default function Cards({
  id,
  title,
  price,
  avaliacao,
  category,
  mais_vendido,
  desconto,
  banner,
  onClick,
  isFavorito,
  toggleFavorito,
}) {
  return (
    <div className="card-loja" onClick={onClick}>
      <div className="img-box">
        <button
          className="btn-fav"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorito(id);
          }}
        >
          <Heart
            size={18}
            color={isFavorito ? "red" : "white"}
            fill={isFavorito ? "red" : "none"}
          />
        </button>

        <img src={banner} alt={title} className="card-img" />
      </div>

      <div className="card-info">
        <h4>{title}</h4>
        <div className="mais-vendido-container">
          {mais_vendido && (
            <>
              <Flame size={16} color="red"/>
              <span>Mais vendido</span>
            </>
          )}
        </div>

          {desconto && (
            <div className="desconto">
              <>
                <Tag size={16}/>
                <span> EM DESCONTO</span>
              </>
            </div>
          )}

        <div className="avaliacao">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              fill={index < Math.floor(avaliacao) ? "#ffc107" : "none"}
              color="#ffc107"
            />
          ))}

          <span>{avaliacao}</span>
        </div>

        <span>{category}</span>

        <p className="preco">R$ {price}</p>

        <button className="play-button">
          <ShoppingCart size={14} />
        </button>
      </div>
    </div>
  );
}
