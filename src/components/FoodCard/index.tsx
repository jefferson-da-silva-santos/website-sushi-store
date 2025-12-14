import { type FC } from 'react';

import useTheme from '../../hooks/useTheme'; 
import { getPrimaryTextStyle, getParagraphTextStyle, getFoodCardStyle } from '../../utils/theme'; 

interface FoodCardProps {
  imageSrc: string; 
  title: string;
  description: string;
  price: string;
}

const FoodCard: FC<FoodCardProps> = ({
  imageSrc,
  title,
  description,
  price
}) => {
  const {theme} = useTheme();

  return (
    <div 
      className={`popular__group-secundary__card-food`}
      style={getFoodCardStyle(theme)}
    >
      <div className="popular__group-secundary__card-food__img">
        <img
          className="popular__group-secundary__card-food__img__img"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="popular__group-secundary__card-food__texts">
        <h3 
          className="popular__group-secundary__card-food__texts__title"
          style={getPrimaryTextStyle(theme)}
        >
          {title}
        </h3>
        <p 
          className="popular__group-secundary__card-food__texts__description"
          style={getParagraphTextStyle(theme)}
        >
          {description}
        </p>
        <span 
          className="popular__group-secundary__card-food__texts__preco"
          style={getPrimaryTextStyle(theme)}
        >
          {price}
        </span>
        <a href="#" className="popular__group-secundary__card-food__texts__btn">
          <i className="bx bx-lock"></i>
        </a>
      </div>
    </div>
  );
};

export default FoodCard;