
import './CardLoja.css'
import {ShoppingCart} from 'lucide-react'

export default function Cards({title, category, banner, onClick}){
    return(
        <div className="card-loja" onClick={onClick}>
            <div className="img-box">
                <img src={banner} alt={title} className="card-img"/>

                <div className="card-info">
                    <h4>{title}</h4>
                    <p>{category}</p>
                    <button className='play-button'>
                        <ShoppingCart size={14}/>
                    </button>
                </div>
            </div>
        </div>
    )
}