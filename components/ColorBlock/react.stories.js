import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import ColorBlock from './react';
import Readme from './react.README.md';

storiesOf('ColorBlock', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1440px' }}>
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
        <ColorBlock
          link='#'
          linkText='Protect What Matters'
          heading='More Peace of Mind'
          subHeading=''
          copy={`Doors not only invite you in, they protect you once you're inside. And when it comes to our schools and universites, protection is paramount.`}
          image='https://embed.widencdn.net/img/masonite/j8aenj8pfa/708x429px/PeaceofMind_Img.jpg'
          colorScheme='light'
          backgroundColor='#92c83e'
        />
        <ColorBlock
          link='#'
          linkText='Explore MConnect®'
          heading='More Connected'
          subHeading=''
          copy={`Our partnerships with customers, dealers, retailers, contractors and installers go way beyond doors. Join MConnect® for tools, information, resources and solutions designed to create a smoother, faster, more friction-free experience.`}
          image='https://embed.widencdn.net/img/masonite/sp2z5baxpj/708x429px/More_Connected_Img.jpg'
          colorScheme='light'
          backgroundColor='#c7c1ab'
        />
      </div>
    );
  });
