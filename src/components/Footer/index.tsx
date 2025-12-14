import { type FC } from "react";

// Importa o hook de tema e as funções de estilo necessárias
import useTheme from "../../hooks/useTheme";
import {
  getFooterLogoStyle,
  getPrimaryTextStyle,
  getParagraphTextStyle,
  getNavGroupStyle,
} from "../../utils/theme";

import spinachLeaf from "../../assets/image/spinach-leaf.png";
import springOnion from "../../assets/image/spring-onion.png";
import leafBranch4 from "../../assets/image/leaf-branch-4.png";
import logoImage from "../../assets/image/logo.png";
import footerCard1 from "../../assets/image/footer-card-1.png";
import footerCard2 from "../../assets/image/footer-card-2.png";
import footerCard3 from "../../assets/image/footer-card-3.png";
import footerCard4 from "../../assets/image/footer-card-4.png";

const mainMenuLinks = [
  { name: "About", href: "#about" },
  { name: "Menus", href: "#menus" },
  { name: "Clear", href: "#clear" },
  { name: "Events", href: "#events" },
];

const infoLinks = [
  { name: "Contact", href: "#contact" },
  { name: "Order & Returns", href: "#order" },
  { name: "Videos", href: "#videos" },
  { name: "Reservation", href: "#reservation" },
];

const socialMediaLinks = [
  { iconClass: "bx bxl-facebook", href: "#" },
  { iconClass: "bx bxl-instagram", href: "#" },
  { iconClass: "bx bxl-twitter-x", href: "#" },
];

const Footer: FC = () => {
  // Obtém o tema
  const { theme } = useTheme();

  return (
    <div className="groupFooter" style={getNavGroupStyle(theme)}>
      <footer className="footer">
        <img className="arte-7" src={spinachLeaf} alt="" />
        <img className="arte-8" src={springOnion} alt="" />
        <img className="arte-9" src={leafBranch4} alt="" />

        <div className="footer__container">
          <div className="footer__container__group-1">
            {/* Aplica estilo de cor ao Logo */}
            <span
              className="footer__container__group-1__logo"
              style={getFooterLogoStyle(theme)}
            >
              <img
                className="footer__container__group-1__logo__img"
                src={logoImage}
                alt="Sushi Logo"
              />
              Sushi
            </span>
            {/* Aplica estilo ao P (Cor de Parágrafo) */}
            <p
              className="footer__container__group__text"
              style={getParagraphTextStyle(theme)}
            >
              Food for the body is not enough. There must be food for the soul.
            </p>
          </div>

          <div className="footer__container__group-2">
            {/* Aplica estilo ao Título (Cor Primária) */}
            <span
              className="footer__container__group-2__title footer-title"
              style={getPrimaryTextStyle(theme)}
            >
              Main Menu
            </span>
            <ul className="footer__container__group-2__list">
              {mainMenuLinks.map((link) => (
                <li key={link.name}>
                  {/* Aplica estilo ao Link (Cor de Parágrafo para links secundários) */}
                  <a href={link.href} style={getParagraphTextStyle(theme)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__container__group-3">
            {/* Aplica estilo ao Título (Cor Primária) */}
            <span
              className="footer__container__group-3__title footer-title"
              style={getPrimaryTextStyle(theme)}
            >
              Information
            </span>
            <ul className="footer__container__group-3__list">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  {/* Aplica estilo ao Link (Cor de Parágrafo) */}
                  <a href={link.href} style={getParagraphTextStyle(theme)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__container__group-4">
            {/* Aplica estilo ao Título (Cor Primária) */}
            <span
              className="footer__container__group-4__title footer-title"
              style={getPrimaryTextStyle(theme)}
            >
              Address
            </span>
            <ul className="footer__container__group-4__list">
              {/* Aplica estilo aos LIs (Cor de Parágrafo) */}
              <li style={getParagraphTextStyle(theme)}>
                Av. Hacienda 1234 Lima 4321, Perú
              </li>
              <li style={getParagraphTextStyle(theme)}>9AM - 11PM</li>
            </ul>
          </div>

          <div className="footer__container__group-5">
            {/* Aplica estilo ao Título (Cor Primária) */}
            <span
              className="footer__container__group-5__title footer-title"
              style={getPrimaryTextStyle(theme)}
            >
              Social Media
            </span>
            <div className="footer__container__group-5__group-social">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.iconClass}
                  href={social.href}
                  style={getPrimaryTextStyle(theme)}
                >
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__container__group-6">
            {/* Aplica estilo ao SMALL (Cor de Parágrafo) */}
            <small
              className="footer__container__group-6__text"
              style={getParagraphTextStyle(theme)}
            >
              © Jefferson Santos
            </small>
            <div className="footer__container__group-6__group-img">
              <img src={footerCard1} alt="Payment Card 1" />
              <img src={footerCard2} alt="Payment Card 2" />
              <img src={footerCard3} alt="Payment Card 3" />
              <img src={footerCard4} alt="Payment Card 4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
