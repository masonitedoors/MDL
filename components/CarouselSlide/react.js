import React from 'react';
// components
import ReactCarousel from 'react-elastic-carousel';
import CarouselPagination from './react'
// css
import classes from './style.module.scss';

export const CarouselSlide = ({ children }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
  ];

  return (
    <ReactCarousel breakPoints={breakPoints} showArrows={false}>
      {children}
    </ReactCarousel>
  );
};

export default CarouselSlide
