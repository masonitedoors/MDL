// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import {
//   withKnobs, boolean, select, text,
// } from '@storybook/addon-knobs'
// import centered from '@storybook/addon-centered/react'
// import { withState } from '@dump247/storybook-state'
// import Tile from './react'
// import Readme from './react.README.md'

// storiesOf('Tile', module)
//   .addParameters({ readme: { sidebar: Readme } })
//   .addDecorator(centered)
//   .add(
//     'default',
//     withState({ value: '' })(({ store }) => (
//       <div style={{ display: 'flex' }}>
//         <Tile
//           label="Tile Component"
//           imageUrl="https://embed.widencdn.net/img/masonite/gsozalqsz9/exact/Shop-by-Panel.png"
//         />
//         <Tile
//           label="A Selected Tile Component"
//           imageUrl="https://embed.widencdn.net/img/masonite/644ybigshm/exact/Shop-by-Collection.png"
//           selected
//         />
//       </div>
//     )),
//   )
