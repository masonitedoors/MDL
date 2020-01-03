import React from 'react'
import { storiesOf } from '@storybook/react'
import { mEntry } from '@masonite/svg-icons'
import Icon from './react'

storiesOf('Icon', module).add('default', () => <Icon svg={mEntry} />)
