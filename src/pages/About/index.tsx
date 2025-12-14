import { type FC } from 'react';

import leafBranch1 from '../../assets/image/leaf-branch-1.png';
import aboutSushi from '../../assets/image/about-sushi.png';
import aboutSushiTitle from '../../assets/image/about-sushi-title.png';

const About: FC = () => {
  return (
    <section className="groupAbout" id="about">
      <img
        src={leafBranch1}
        alt=""
        className="arte-3"
      />

      <div className="about">
        <div className="about__group-primary">
          <img
            className="about__group-primary__img"
            src={aboutSushi}
            alt="Delicious Sushi Rolls"
          />
        </div>

        <div className="about__group-secundary">
          <span className="about__group-secundary__suptitle">About Us</span>
          <h2 className="about__group-secundary__title">
            We Provide
            <img
              className="about__group-secundary__title__img"
              src={aboutSushiTitle}
              alt="Healthy Food" 
            />
            Healthy Food
          </h2>
          <p className="about__group-secundary__text">
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a culture it has
            a history that passes from generation to generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;