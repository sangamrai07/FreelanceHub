import React from 'react';
import './css/CardSlider.scss';
import Card from './Card';
import { cards } from './data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CardSlider() {

  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='slide'>
      <div className="container">
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}  
          arrows={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px">
          {cards.map(card => (
            <Card card={card} key={card.id} /> 
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CardSlider;

