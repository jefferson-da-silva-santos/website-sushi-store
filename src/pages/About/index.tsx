import { type FC } from 'react';

import useTheme from '../../hooks/useTheme';
import { getPrimaryTextStyle, getParagraphTextStyle, getNavGroupStyle } from '../../utils/theme'; 

import leafBranch from '../../assets/image/leaf-branch-1.png';
import aboutSushiTitle from '../../assets/image/about-sushi-title.png';
import aboutSushi from '../../assets/image/about-sushi.png';

const Popular: FC = () => {
  const { theme } = useTheme();

  return (
    <div className="groupAbout" id="about" style={getNavGroupStyle(theme)}>
      <img src={leafBranch} alt="" className="arte-3" />
      <section className="about">
        <div className="about__group-primary">
          <img
            className="about__group-primary__img"
            src={aboutSushi}
            alt=""
          />
        </div>
        <div className="about__group-secundary">
          <span 
            className="about__group-secundary__suptitle"
            style={getParagraphTextStyle(theme)} 
          >
            About Us
          </span>
          <h2 
            className="about__group-secundary__title"
            style={getPrimaryTextStyle(theme)}
          >
            We Provide
            <img
              className="about__group-secundary__title__img"
              src={aboutSushiTitle}
              alt=""
            />
            Healthy Food
          </h2>
          
          <p 
            className="about__group-secundary__text"
            style={getParagraphTextStyle(theme)}
          >
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a cutture it has
            a history that passes from generation to generation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Popular;