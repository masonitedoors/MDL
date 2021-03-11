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
      title='Lorem Ipsum'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    />
  ));
