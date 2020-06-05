import React, { useReducer, useEffect } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setFillLength':
      return {
        ...state,
        fillLength: payload.fillLength,
        fillTransition: Object.prototype.hasOwnProperty.call(payload, 'fillTransition')
          ? payload.fillTransition
          : true,
      }
    case 'setFillIndex':
      return { ...state, fillIndex: payload }
    case 'fillToIndex':
      return (() => {
        const fillIndex = state.fillToIndex > state.prevFillToIndex ? state.fillIndex + 1 : state.fillIndex - 1
        return {
          ...state,
          fillIndex: fillIndex > 0 ? fillIndex : 0,
        }
      })()
    case 'setFillToIndex':
      return {
        ...state,
        fillToIndex: payload > -1 ? payload : 0,
        prevFillToIndex: state.fillToIndex,
      }
    case 'updatePointData':
      return {
        ...state,
        pointOffsetStarts: payload.pointOffsetStarts || state.pointOffsetStarts,
        pointOffsetSizes: payload.pointOffsetSizes || state.pointOffsetSizes,
      }
    default:
      throw new Error()
  }
}

const PROGRESS_POINT_SIZE = 16

const initialState = {
  fillLength: '8px',
  fillIndex: 0,
  fillToIndex: 0,
  fillTransition: true,
  prevFillToIndex: null,
  pointOffsetSizes: [],
  pointOffsetStarts: [],
}

const ProgressBar = React.forwardRef(
  ({
    progressPoints, currentPointId, horizontal, recalculate,
  }, ref) => {
    const progressPointRefs = []

    const [state, dispatch] = useReducer(reducer, initialState)
    const {
      fillLength,
      fillIndex,
      fillToIndex,
      fillTransition,
      pointOffsetSizes,
      pointOffsetStarts,
    } = state

    const currentPointIdIndex = progressPoints && progressPoints.map(({ id }) => id).indexOf(currentPointId)

    const points = progressPoints && progressPoints.map((progressPoint, index) => {
      progressPointRefs.push(React.createRef())

      return (
        <div
          className={cx('progress-bar__point-label')}
          key={progressPoint.id}
          ref={progressPointRefs[index]}
        >
          <div
            className={cx('progress-bar__point', {
              'progress-bar__point--active': currentPointIdIndex >= index && fillIndex >= index,
            })}
          >
            {progressPoint.render && progressPoint.render()}
          </div>
        </div>
      )
    })

    const progressBarMeterStyle = {
      [horizontal ? 'right' : 'bottom']: `${pointOffsetSizes[pointOffsetSizes.length - 1]
        - PROGRESS_POINT_SIZE / 2}px`,
    }

    const barFillStyle = {
      [horizontal ? 'width' : 'height']: fillLength,
    }

    /*
     * Inform progress bar of the fill target for staggered fill animation.
     */
    useEffect(() => {
      dispatch({ type: 'setFillToIndex', payload: currentPointIdIndex })
    }, [currentPointIdIndex])

    /*
     * In case the initial currentPointId is not the first, let's default this.
     */
    useEffect(() => {
      dispatch({ type: 'setFillIndex', payload: currentPointIdIndex })
    }, [])

    /*
     * Set progress bar fill length.
     */
    useEffect(() => {
      if (
        progressPointRefs.length > 0
        && progressPointRefs.length === progressPoints.length
        && fillIndex !== fillToIndex
      ) {
        const direction = fillToIndex > fillIndex ? 1 : -1

        const pointOffsetStarts = progressPointRefs.map(point =>
          (horizontal ? point.current.offsetLeft : point.current.offsetTop))
        const pointOffsetSizes = progressPointRefs.map(point =>
          (horizontal ? point.current.offsetWidth : point.current.offsetHeight))

        dispatch({
          type: 'updatePointData',
          payload: { pointOffsetStarts, pointOffsetSizes },
        })
        dispatch({
          type: 'setFillLength',
          payload: {
            fillLength: `${
              pointOffsetStarts[fillIndex + direction > 0 ? fillIndex + direction : 0]
            }px`,
          },
        })
      }
    }, [pointOffsetStarts.join(''), fillToIndex, fillIndex])

    /*
     * Force recalculations of progress bar (such as when a point's content's size changes.
     */
    useEffect(() => {
      const pointOffsetStarts = progressPointRefs.map(point =>
        (horizontal ? point.current.offsetLeft : point.current.offsetTop))
      const pointOffsetSizes = progressPointRefs.map(point =>
        (horizontal ? point.current.offsetWidth : point.current.offsetHeight))

      dispatch({
        type: 'updatePointData',
        payload: { pointOffsetStarts, pointOffsetSizes },
      })
      dispatch({
        type: 'setFillLength',
        payload: {
          fillLength: `${pointOffsetStarts[currentPointIdIndex]}px`,
          fillTransition: false,
        },
      })
    }, [recalculate])

    return (
      <section className={cx('progress-bar', horizontal ? 'horizontal' : 'vertical')} ref={ref}>
        <div className={cx('progress-bar__meter-wrapper')}>
          <div className={cx('progress-bar__meter')} style={progressBarMeterStyle} />
          <div
            className={cx('progress-bar__meter', 'progress-bar__meter--fill', {
              'progress-bar__meter--transitioning': fillTransition,
            })}
            onTransitionEnd={() => {
              dispatch({ type: 'setFillIndex', payload: fillToIndex })
            }}
            style={barFillStyle}
          />
          <div className={cx('progress-bar__points')}>{points}</div>
        </div>
      </section>
    )
  },
)

ProgressBar.propTypes = {
  progressPoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  currentPointId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  recalculate: PropTypes.string,
}

ProgressBar.defaultProps = {
  currentPointId: null,
  recalculate: null,
}

export default ProgressBar
