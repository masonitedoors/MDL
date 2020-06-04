import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import ProgressBar from './react'
import storyStyles from './react.stories.module.scss'
import Readme from './react.README.md'

const cx = classNames.bind(storyStyles)

const Container = ({ horizontal, dynamic }) => {
  const ref = useRef()
  const [numElements, setNumElements] = useState(5)
  const [elementsExpanded, setElementsExpanded] = useState({})
  const [currentPointId, setCurrentPointId] = useState('2')

  const data = [...Array(numElements).keys()].map(num => ({
    id: `${num + 1}`,
    name: `Element ${num + 1}`,
  }))

  const toggleSize = id => () =>
    setElementsExpanded({
      ...elementsExpanded,
      [id]: !elementsExpanded[id],
    })

  const progressPoints = data.map(({ id, name }) => ({
    id,
    render: () => (
      <div className={cx('progress-point-container')}>
        <div className={cx('progress-point', { big: elementsExpanded[id] })}>
          {name}
          {dynamic && (
            <>
              &nbsp;(
              <button className={cx('change-size')} onClick={toggleSize(id)}>
                go {elementsExpanded[id] ? 'small' : 'big'}
              </button>
              )
            </>
          )}
        </div>
      </div>
    ),
  }))

  return (
    <div className={cx('progress-container', { horizontal })}>
      <label>
        Number of points:
        <input
          type="number"
          value={numElements}
          onChange={({ target }) => setNumElements(+target.value)}
        />
      </label>
      <label>
        Current points:
        <input
          type="number"
          value={currentPointId}
          onChange={({ target }) => setCurrentPointId(target.value)}
        />
      </label>
      <ProgressBar
        {...{
          progressPoints, currentPointId, ref, horizontal,
        }}
        recalculate={dynamic && elementsExpanded}
      />
    </div>
  )
}

storiesOf('ProgressBar', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('Vertical/Dynamic', () => <Container dynamic />)
  .add('Horizontal/Static', () => <Container horizontal />)
