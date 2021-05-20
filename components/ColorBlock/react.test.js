import React from 'react';
import { render } from '@testing-library/react';
import ColorBlock from './react';

describe('Color Blocks', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <ColorBlock
        link='#'
        linkText='Get Inspired'
        heading='More Life'
        subHeading=''
        copy={`We are constantly designing new and different ways for doors to do more. Whether it's more light, more peace and quiet, more peace of mind, more function, more technology or more style, we believe doors can do more.`}
        image='https://embed.widencdn.net/img/masonite/benaiziirh/708x429px/hero.jpeg'
        colorScheme='light'
        backgroundColor='#949fa6'
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
