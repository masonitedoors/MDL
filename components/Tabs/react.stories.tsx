// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { withKnobs, select } from '@storybook/addon-knobs'
// import { withState } from '@dump247/storybook-state'
// import Tabs from './react'
// import Readme from './react.README.md'

// storiesOf('Tabs', module)
//   .addParameters({ readme: { sidebar: Readme } })
//   .addDecorator(withKnobs)
//   .add(
//     'Default',
//     withState({ activeTab: 1 })(({ store }) => {
//       const tabs = [
//         {
//           id: 0,
//           children: 'Lorem Ipsum',
//         },
//         {
//           id: 1,
//           children: <span>Using JSX</span>,
//         },
//       ]

//       const size = select(
//         'Size',
//         {
//           Small: 'sm',
//           Base: '',
//         },
//         '',
//       )

//       return (
//         <Tabs
//           tabs={tabs}
//           size={size}
//           activeTab={store.state.activeTab}
//           onTabClick={id => store.set({ activeTab: id })}
//         />
//       )
//     }),
//   )
