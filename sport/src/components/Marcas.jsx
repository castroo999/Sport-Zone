import './Marcas.css'
import logoadidas from '../assets/logoadidas.webp'
import nike from '../assets/nike.webp'
import olympikus from '../assets/olympikus.webp'
import mizuno from '../assets/mizuno.webp'
  
export default function Marcas({ setMarcaSelecionada }) {
  return(
    <div className="marcas">
      <img src={logoadidas} onClick={() => setMarcaSelecionada("Adidas")} />
      <img src={nike} onClick={() => setMarcaSelecionada("Nike")} />
      <img src={olympikus} onClick={() => setMarcaSelecionada("Olympikus")} />
      <img src={mizuno} onClick={() => setMarcaSelecionada("Mizuno")} />    
    </div>

    
  )
}