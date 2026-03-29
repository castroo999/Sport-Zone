import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contato">
        <h2>Entre em contatro aqui:</h2>
        <span>
          <SiGmail size={30} />
          VSTR@gmail.com
        </span> 
        <span>
          <SiGmail size={30} />
          SportZone@gmail.com
        </span>
        <span>
          <FaInstagram size={30} color="deeppink" /> Instagram: @Sport_Zone
        </span>
        <span>
          <FaWhatsapp size={30} color="green" /> Tel: (55) 15996485913
        </span>
      </div>
    </div>
  );
}
