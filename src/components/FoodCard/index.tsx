import { type FC } from 'react';

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
  return (
    <div className={`popular__group-secundary__card-food`}>
      <div className="popular__group-secundary__card-food__img">
        <img
          className="popular__group-secundary__card-food__img__img"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="popular__group-secundary__card-food__texts">
        <h3 className="popular__group-secundary__card-food__texts__title">
          {title}
        </h3>
        <p className="popular__group-secundary__card-food__texts__description">
          {description}
        </p>
        <span className="popular__group-secundary__card-food__texts__preco">
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