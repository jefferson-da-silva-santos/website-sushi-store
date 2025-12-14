import { type FC } from 'react';
import useTheme from '../../hooks/useTheme'; 
import { getPrimaryTextStyle, getParagraphTextStyle, getNavGroupStyle } from '../../utils/theme'; 

import FoodCard from '../../components/FoodCard'; 

import popularOnigiri from '../../assets/image/popular-onigiri.png';
import popularSpringRols from '../../assets/image/popular-spring-rols.png';

const popularDishes = [
  {
    id: 1,
    title: 'Onigiri',
    description: 'Japonese Dish',
    price: '$10.99',
    imageSrc: popularOnigiri,
  },
  {
    id: 2,
    title: 'Spring Rolls',
    description: 'Japonese Dish',
    price: '$15.99',
    imageSrc: popularSpringRols,
  },
  {
    id: 3,
    title: 'Sushi Rolls',
    description: 'Japonese Dish',
    price: '$19.99',
    imageSrc: popularOnigiri,
  },
];

const Popular: FC = () => {
  
  const { theme } = useTheme();

  return (
    <section className="groupPopular" id="popular" style={getNavGroupStyle(theme)}>
      <div className="popular">
        <div className="popular__group-primary" data-aos="zoom-in-up">
          <span 
            className="popular__group-primary__suptitle"
            style={getParagraphTextStyle(theme)} 
          >
            The Best Food
          </span>
          <h2 
            className="popular__group-primary__title"
            style={getPrimaryTextStyle(theme)}
          >
            Popular Dishes
          </h2>
        </div>
        
        <div className="popular__group-secundary">
          {popularDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              imageSrc={dish.imageSrc}
              title={dish.title}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;