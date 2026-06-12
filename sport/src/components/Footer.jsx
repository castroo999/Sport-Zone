import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-brand">
          <h2>Sport<span>Zone</span></h2>
          <p>Eleve seu jogo. Supere seus limites.</p>
        </div>

        
        <div className="footer-column">
          <h3>Atendimento</h3>
          <a href="" className="footer-link">
            <MdEmail size={20} />
            SportZone@gmail.com
          </a>
          <a href="" className="footer-link">
            <MdEmail size={20} />
            VSTR@gmail.com
          </a>
        </div>

        
        <div className="footer-column">
          <h3>Conecte-se</h3>
          <a href="https://instagram.com/Sport_Zone" target="_blank" rel="noreferrer" className="footer-link instagram-hover">
            <FaInstagram size={20} />
            @Sport_Zone
          </a>
          <a href="https://wa.me/5515996485913" target="_blank" rel="noreferrer" className="footer-link whatsapp-hover">
            <FaWhatsapp size={20} />
            (15) 99648-5913
          </a>
        </div>

      </div>
      
      
      <div className="footer-bottom">
        <p>&copy; 2026 SportZone. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}