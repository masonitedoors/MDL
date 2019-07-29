import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import ScrollBar from './react'
import Readme from './react.README.md'

storiesOf('ScrollBar', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('vertical scroll', () => (
    <ScrollBar areaStyle={{ width: 400, height: 300 }}>
      <p>Some long content to demonstrate vertical scrolling.</p>
      <p>
        Mattis convallis torquent etiam fames porttitor malesuada phasellus neque suscipit consequat
        ad maecenas venenatis vehicula suspendisse diam efficitur per nibh proin congue enim netus
        leo non elit placerat primis aliquet lobortis sollicitudin vestibulum volutpat platea
        faucibus rutrum auctor conubia sapien ex eleifend ridiculus semper ut natoque quisque
        nascetur sodales senectus mi bibendum nostra potenti velit integer dis hac facilisi
        parturient vivamus tortor ultrices viverra nec vitae nisi molestie ac consectetur turpis
        cursus praesent adipiscing magnis massa donec hendrerit quis luctus ipsum a facilisis
        laoreet sagittis tellus et scelerisque cras vulputate gravida nullam fusce maximus ornare
        penatibus aliquam tempus habitant lacinia.
      </p>
      <p>
        Mattis convallis torquent etiam fames porttitor malesuada phasellus neque suscipit consequat
        ad maecenas venenatis vehicula suspendisse diam efficitur per nibh proin congue enim netus
        leo non elit placerat primis aliquet lobortis sollicitudin vestibulum volutpat platea
        faucibus rutrum auctor conubia sapien ex eleifend ridiculus semper ut natoque quisque
        nascetur sodales senectus mi bibendum nostra potenti velit integer dis hac facilisi
        parturient vivamus tortor ultrices viverra nec vitae nisi molestie ac consectetur turpis
        cursus praesent adipiscing magnis massa donec hendrerit quis luctus ipsum a facilisis
        laoreet sagittis tellus et scelerisque cras vulputate gravida nullam fusce maximus ornare
        penatibus aliquam tempus habitant lacinia.
      </p>
      <p>
        Mattis convallis torquent etiam fames porttitor malesuada phasellus neque suscipit consequat
        ad maecenas venenatis vehicula suspendisse diam efficitur per nibh proin congue enim netus
        leo non elit placerat primis aliquet lobortis sollicitudin vestibulum volutpat platea
        faucibus rutrum auctor conubia sapien ex eleifend ridiculus semper ut natoque quisque
        nascetur sodales senectus mi bibendum nostra potenti velit integer dis hac facilisi
        parturient vivamus tortor ultrices viverra nec vitae nisi molestie ac consectetur turpis
        cursus praesent adipiscing magnis massa donec hendrerit quis luctus ipsum a facilisis
        laoreet sagittis tellus et scelerisque cras vulputate gravida nullam fusce maximus ornare
        penatibus aliquam tempus habitant lacinia.
      </p>
    </ScrollBar>
  ))
  .add('horizontal scroll', () => (
    <ScrollBar areaStyle={{ width: 300, height: 300 }} contentStyle={{ width: 600 }}>
      <p>
        Mattis convallis torquent etiam fames porttitor malesuada phasellus neque suscipit consequat
        ad maecenas venenatis vehicula suspendisse diam efficitur per nibh proin congue enim netus
        leo non elit placerat primis aliquet lobortis sollicitudin vestibulum volutpat platea
        faucibus rutrum auctor conubia sapien ex eleifend ridiculus semper ut natoque quisque
        nascetur sodales senectus mi bibendum nostra potenti velit integer dis hac facilisi
        parturient vivamus tortor ultrices viverra nec vitae nisi molestie ac consectetur turpis
        cursus praesent adipiscing magnis massa donec hendrerit quis luctus ipsum a facilisis
        laoreet sagittis tellus et scelerisque cras vulputate gravida nullam fusce maximus ornare
        penatibus aliquam tempus habitant lacinia.
      </p>
    </ScrollBar>
  ))
