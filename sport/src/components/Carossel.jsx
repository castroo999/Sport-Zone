import './Carossel.css'
import laranja from '../assets/laranja.webp'
import bege from '../assets/bege.webp'
import adzero from '../assets/adzero.webp'
import camisa2 from '../assets/camisa2.webp'
import shorts from '../assets/shorts.webp'
import camisa4 from '../assets/camisa4.webp'

export default function Carossel() {
  return (
    <div className="carrossel">
      <div className="grupo">
        
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={camisa2} alt="dry" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={shorts} alt="short" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={camisa4} alt="longa" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>

        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={camisa2} alt="dry" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={shorts} alt="short" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={camisa4} alt="longa" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
      </div>
    </div>
  )
}