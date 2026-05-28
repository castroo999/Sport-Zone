import "./Marcas.css";
import logoadidas from "../assets/logoadidas.webp";
import nike from "../assets/nike.webp";
import olympikus from "../assets/olympikus.webp";
import mizuno from "../assets/mizuno.webp";

export default function Marcas({ setMarcaSelecionada, setCategoriaSelecionada }) {
  return (
    <div className="marcas">
      <img
        src={logoadidas} onClick={() => {setMarcaSelecionada("Adidas"); setCategoriaSelecionada("");}}/>
      <img src={nike} onClick={() => {setMarcaSelecionada("Nike"); setCategoriaSelecionada("")}} />
      <img src={olympikus} onClick={() => {setMarcaSelecionada("Olympikus"); setCategoriaSelecionada("")}} />
      <img src={mizuno} onClick={() => {setMarcaSelecionada("Mizuno"); setCategoriaSelecionada("")}} />
    </div>
  );
}
