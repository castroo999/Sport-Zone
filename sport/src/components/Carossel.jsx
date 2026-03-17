import './Carossel.css'
import laranja from '../assets/laranja.webp'
import bege from '../assets/bege.webp'
import adzero from '../assets/adzero.webp'

export default function Carossel() {
  return (
    <div className="carrossel">
      <div className="grupo">
        
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>

        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
      </div>
    </div>
  )
}