import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import ProgressBar from './react'
import storyStyles from './react.stories.module.scss'

const cx = classNames.bind(storyStyles)

const Template = ({ dynamic, numElements, ...rest }) => {
  const ref = useRef()
  const [elementsExpanded, setElementsExpanded] = useState({})
  const { horizontal } = rest

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
      <ProgressBar
        {...{
          progressPoints, ref, ...rest,
        }}
        recalculate={dynamic && elementsExpanded}
      />
    </div>
  )
}

const idChoices = [...Array(10).keys()].map(num => `${num + 1}`)

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    currentPointId: {
      options: idChoices,
      control: { type: 'radio' },
    },
    progressPoints: { table: { disable: true }},
    recalculate: { table: { disable: true }},
  }
}

export const Primary = Template.bind({})
Primary.args = {
  numElements: 5,
  currentPointId: '2',
  dynamic: false,
}
