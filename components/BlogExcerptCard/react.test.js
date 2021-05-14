import React from 'react';
import { render } from '@testing-library/react';
import BlogExcerptCard from './react';

describe('BlogExcerptCard', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <BlogExcerptCard
        title='Why Stile and Rail Doors are Worth the Investment'
        content='When you want the best quality wood doors for a hospitality or office project, stile and rail doors provide both...'
        image='https://embed.widencdn.net/img/masonite/8hui9fjtwo/exact/Harring_Hotel%20Indigo_2_L2.jpeg'
        link='#'
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
