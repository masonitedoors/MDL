import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import ColorBlock from './react'
import Readme from './react.README.md'

storiesOf('ColorBlock', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
      <ColorBlock
      link={'#'}
      linkText={'Protect What Matters'}
      heading={'More Peace of Mind'}
      subHeading={''}
      copy={'Doors not only invite you in, they protect you once you\'re inside. And when it comes to our schools and universites, protection is paramount.'}
      image={'https://embed.widencdn.net/img/masonite/4fsn5jgaup/708x429px/Interior-Doors_Residential.png'}
      colorScheme={'light'}
      backgroundColor={'#92c83e'}
      >
      </ColorBlock>
      </div>
    )
  })
