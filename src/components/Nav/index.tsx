import { type FC, useEffect, useRef } from "react";

import logoImage from "../../assets/image/logo.png";
import useTheme from "../../hooks/useTheme";
import { getFooterLogoStyle, getNavGroupStyle, getNavListMenuStyle, getPrimaryTextStyle } from "../../utils/theme";

const Nav: FC = () => {
  const { theme, iconThemeButton, toggleTheme } = useTheme();
  const groupNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (groupNavRef.current) {
        groupNavRef.current.style.boxShadow =
          window.scrollY === 0
            ? "none"
            : "0px 0px 10px hsla(20, 15%, 43%, 0.361)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="groupNav" ref={groupNavRef} style={getNavGroupStyle(theme)}>
      <nav className="nav">
        <a href="#home" style={getFooterLogoStyle(theme)} className="nav__logo nav__list-menu__item__item">
          <img className="nav__logo__img" src={logoImage} alt="Sushi Logo" />
          Sushi
        </a>
        <div className="nav__menu">
          <div className="nav__menu__line"></div>
          <div className="nav__menu__line"></div>
          <div className="nav__menu__line"></div>
        </div>

        <ul className="nav__list-menu" style={getNavListMenuStyle(theme)}>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#home" style={getPrimaryTextStyle(theme)}>
              Home
            </a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#about" style={getPrimaryTextStyle(theme)}>
              About Us
            </a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#popular" style={getPrimaryTextStyle(theme)}>
              Popular
            </a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#recently" style={getPrimaryTextStyle(theme)}>
              Recently
            </a>
          </li>

          <li className="nav__list-menu__item">
            <a onClick={(e) => { e.preventDefault(); toggleTheme(); }}  id="btn-theme" style={getPrimaryTextStyle(theme)} className="nav__list-menu__item__item" href="#">
              <i className={iconThemeButton}></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
