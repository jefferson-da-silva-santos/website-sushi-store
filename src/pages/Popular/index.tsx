import { type FC } from 'react';
// Importa o hook de tema e as funções de estilo necessárias
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
  // Obtém o tema
  const { theme } = useTheme();

  return (
    <section className="groupPopular" id="popular" style={getNavGroupStyle(theme)}>
      <div className="popular">
        <div className="popular__group-primary">
          {/* Aplica estilo ao SPAN (Cor de Parágrafo) */}
          <span 
            className="popular__group-primary__suptitle"
            style={getParagraphTextStyle(theme)} 
          >
            The Best Food
          </span>
          {/* Aplica estilo ao H2 (Cor Primária) */}
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
              // O FoodCard aplicará o estilo de card internamente
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;