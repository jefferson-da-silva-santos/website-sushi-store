import { type FC } from 'react';
import type { ReactNode } from 'react';

import leafBranch2 from '../../assets/image/leaf-branch-2.png';
import leafBranch4 from '../../assets/image/leaf-branch-4.png';
import homeSushiTitle from '../../assets/image/home-sushi-title.png';
import homeSushiRolls from '../../assets/image/home-sushi-rolls.png';

interface HomeProps {
  children?: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <section className="groupHeader" id="home">
      <img
        src={leafBranch2}
        alt=""
        className="arte-1"
      />
      <img
        src={leafBranch4}
        alt=""
        className="arte-2"
      />
      {children}

      <header className="header">
        <div className="header__group-primary">
          <h1 className="header__group-primary__title">
            Enjoy Delicious
            <img
              className="header__group-primary__title__img"
              src={homeSushiTitle}
              alt="Sushi"
            />
            Sushi Food
          </h1>

          <p className="header__group-primary__text">
            Enjoy a good dinner with the best dishes in the restaurant and
            improve your day.
          </p>
          <a href="#" className="header__group-primary__btn">
            Order Now <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
        <div className="header__group-secundary">
          <img
            className="header__group-secundary__img"
            src={homeSushiRolls}
            alt="Sushi Rolls"
          />
        </div>
      </header>
    </section>
  );
};

export default Home;