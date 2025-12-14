import { type FC, useEffect, useRef } from 'react';

import logoImage from '../../assets/image/logo.png';

const Nav: FC = () => {
  const groupNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (groupNavRef.current) {
        groupNavRef.current.style.boxShadow = (window.scrollY === 0) 
          ? 'none' 
          : '0px 0px 10px hsla(20, 15%, 43%, 0.361)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="groupNav" ref={groupNavRef}> 
      <nav className="nav">
        <a href="#home" className="nav__logo nav__list-menu__item__item">
          <img className="nav__logo__img" src={logoImage} alt="Sushi Logo" />
          Sushi
        </a>
        <div className="nav__menu">
          <div className="nav__menu__line"></div>
          <div className="nav__menu__line"></div>
          <div className="nav__menu__line"></div>
        </div>

        <ul className="nav__list-menu">
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#home">Home</a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#about">About Us</a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#popular">Popular</a>
          </li>
          <li className="nav__list-menu__item">
            <a className="nav__list-menu__item__item" href="#recently">Recently</a>
          </li>
          
          <li className="nav__list-menu__item">
            <a id="btn-theme" className="nav__list-menu__item__item" href="#">
              <i className="bx bx-moon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;