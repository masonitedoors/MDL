import React from 'react';
// icons
//import { ReactComponent as ChevronRight } from '@masonite/svg-icons/dist/svg/chevron-right.svg';
//import { ReactComponent as ChevronLeft } from '@masonite/svg-icons/dist/svg/chevron-left.svg';
// css
import classes from './style.module.scss';

// TODO - export this into MDL once finalized

const getPaginationOptions = (pages, activePage) => {
  if (pages.length === 0) {
    return [];
  }
  // return all page options if we have 5 or less
  if (pages.length <= 5) {
    return pages;
  }

  // if we are in the first 2 items, just return 5 options 0-4
  // since we know at this point we have more than 5 options
  if (activePage === 0 || activePage === 1) {
    return [0, 1, 2, 3, 4];
  }

  // if we are at one of the last 2 items then we need
  // to just return the last 5 pages
  if (activePage === pages.length - 1 || activePage === pages.length - 2) {
    return [pages.length - 5, pages.length - 4, pages.length - 3, pages.length - 2, pages.length - 1];
  }

  // otherwise we are somewhere in the middle, center the current page
  // and return 2 before and 2 after
  return [activePage - 2, activePage - 1, activePage, activePage + 1, activePage + 2];
};

const CarouselPagination = ({ pages=[], activePage, onClick }) => {
  return (
    <CarouselPagination className={classes.pagination}>
      <button disabled={activePage === 0} onClick={() => onClick(activePage - 1)}>
      </button>
      {getPaginationOptions(pages, activePage).map(index => (
        <button key={`pagination-index-${index}`} onClick={() => onClick(index)} className={activePage === index ? classes.active : ''}>
          {index + 1}
        </button>
      ))}
      <button disabled={activePage === pages.length - 1} onClick={() => onClick(activePage + 1)}>
      </button>
    </CarouselPagination>
  );
};

export default CarouselPagination