import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import BlogExcerptCard from './react';
import Readme from './react.README.md';

storiesOf('BlogExcerptCard', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BlogExcerptCard
      title='Why Stile and Rail Doors are Worth the Investment'
      content='When you want the best quality wood doors for a hospitality or office project, stile and rail doors provide both...'
      image='https://embed.widencdn.net/img/masonite/8hui9fjtwo/exact/Harring_Hotel%20Indigo_2_L2.jpeg'
      link='#'
    />
  ));
