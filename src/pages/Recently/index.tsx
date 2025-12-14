import React, { type FC, useState } from 'react';

import useTheme from '../../hooks/useTheme'; 
import { 
  getPrimaryTextStyle, 
  getParagraphTextStyle,
  getRecentlyFormStyle,
  getRecentlyFormInputGroupStyle,
  getRecentlyFormTitleStyle,
  getNavGroupStyle,
} from '../../utils/theme'; 

import leafBranch2 from '../../assets/image/leaf-branch-2.png';
import leafBranch3 from '../../assets/image/leaf-branch-3.png';
import spinachLeaf from '../../assets/image/spinach-leaf.png';
import recentlySalmonSushi from '../../assets/image/recently-salmon-sushi.png';
import newsletterSushi from '../../assets/image/newsletter-sushi.png';

const Recently: FC = () => {
  const [email, setEmail] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('E-mail enviado:', email);
    setEmail('');
  };

  return (
    <section className="groupRecently" id="recently" style={getNavGroupStyle(theme)}>
      <img className="arte-4" src={leafBranch2} alt="" />
      <img className="arte-5" src={leafBranch3} alt="" />
      
      <div className="recently">
        <section className="recently-primary">
          <div className="recently-primary__group-texts" data-aos="fade-right">
            <span 
              className="recently-primary__group-texts__suptitle"
              style={getParagraphTextStyle(theme)}
            >
              Recently Added
            </span>
            <h2 
              className="recently-primary__group-texts__title"
              style={getPrimaryTextStyle(theme)}
            >
              Sushi Samurai <br />
              Salmón Cheese
              <img
                className="recently-primary__group-texts__title__img"
                src={spinachLeaf}
                alt="Spinach Leaf Decoration"
              />
            </h2>
            <p 
              className="recently-primary__group-texts__text"
              style={getParagraphTextStyle(theme)}
            >
              Take a look at what's new And do not deprive yourself of a good
              meal enjoy and be happy
            </p>
            <a href="#" className="recently-primary__group-texts__btn">
              Order Now <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>
          <div className="recently-primary__group-img" data-aos="fade-left">
            <img
              className="recently-primary__group-img__img"
              src={recentlySalmonSushi}
              alt="Recently Added Salmon Sushi"
            />
          </div>
        </section>

        <section className="recently-secundary" data-aos="fade-up">
          <form 
            className="recently-secundary__form" 
            onSubmit={handleSubmit}
            style={getRecentlyFormStyle(theme)}
          >
            <img className="arte-6" src={spinachLeaf} alt="" />
            <div className="recently-secundary__form__group-img">
              <img
                className="recently-secundary__form__group-img__img"
                src={newsletterSushi}
                alt="Sushi Newsletter graphic"
              />
            </div>
            <div className="recently-secundary__form__group-texts">
              <span 
                className="recently-secundary__form__group-texts__suptitle"
                style={getParagraphTextStyle(theme)}
              >
                Newsletter
              </span>
              <h2 
                className="recently-secundary__form__group-texts__title"
                style={getRecentlyFormTitleStyle(theme)}
              >
                Subscribe For Offer Updates
              </h2>
              <div 
                className="recently-secundary__form__group-texts__group-input"
                style={getRecentlyFormInputGroupStyle(theme)}
              >
                <input
                  placeholder="Enter email"
                  type="email"
                  className="recently-secundary__form__group-texts__group-input__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="recently-secundary__form__group-texts__group-input__btn"
                >
                  Subscribe <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Recently;