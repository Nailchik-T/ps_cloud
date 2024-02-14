import "./Footer.scss";
import facebook from "../../assets/facebook.png";
import vk from "../../assets/vk.png";
import twiter from "../../assets/twiter.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        &copy; 2003–2023 ТОО «Интернет-компания PS»
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/contacts">Контакты</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/usage-policy">Правила использования</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/public-offer">Публичная оферта</Link>
          </li>
          <li className="footer__nav-item">
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
          </li>
        </ul>
      </nav>
      <div className="footer__social">
        <Link to="#">
          <img className="footer__social-icons" src={facebook} alt="facebook" />
        </Link>
        <Link to="#">
          <img className="footer__social-icons" src={vk} alt="vk" />
        </Link>
        <Link to="#">
          <img className="footer__social-icons" src={twiter} alt="twiter" />
        </Link>
        <Link to="#">
          <img
            className="footer__social-icons"
            src={instagram}
            alt="instagram"
          />
        </Link>
        <Link to="#">
          <img className="footer__social-icons" src={telegram} alt="telegram" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
