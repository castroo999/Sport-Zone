import './Carossel.css'
import laranja from '../assets/laranja.webp'
import bege from '../assets/bege.webp'
import adzero from '../assets/adzero.webp'
import dry from '../assets/dry.webp'
import short from '../assets/short.webp'
import longa from '../assets/longa.webp'

export default function Carossel() {
  return (
    <div className="carrossel">
      <div className="grupo">
        
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={dry} alt="dry" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={short} alt="short" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={longa} alt="longa" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>

        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={dry} alt="dry" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={short} alt="short" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
        <div className="card"><img src={longa} alt="longa" /></div>
        <div className="card"><img src={laranja} alt="laranja" /></div>
        <div className="card"><img src={bege} alt="bege" /></div>
        <div className="card"><img src={adzero} alt="adzero" /></div>
      </div>
    </div>
  )
}