import capitalize from 'capitalize'
import {compose, map} from 'ramda'
import {createElement} from 'react'
import {connect} from 'react-redux'
import {bpmSet, rootNoteSet, selectedScaleSet} from '../../actions'
import ButtonPrimary from '../atoms/ButtonPrimary'
import RangeLabelled from '../molecules/RangeLabelled'
import noteNameFromPitch from '../../audioHelpers/noteNameFromPitch'
import Selector from '../molecules/Selector'
import scales from '../../constants/scales'
import {makeClassName, eventValuePath} from '../../utils/dom'

const minBpm = 32

const mapStateToProps = ({
  nav: {lastDirection},
  microphone,
  settings: {bpm, rootNote, selectedScale},
}) => ({
  bpm,
  lastDirection,
  microphone,
  rootNote,
  selectedScale,
})

export default connect(mapStateToProps)(({
  bpm,
  dispatch,
  lastDirection,
  rootNote,
  selectedScale,
}) =>
  createElement('div', {
    className: makeClassName(
      'Settings',
      lastDirection === 'left' ? 'slide-in-left' : 'slide-in-right'
    ),
  },
    createElement(RangeLabelled, {
      max: 512,
      min: minBpm,
      onChange: compose(dispatch, bpmSet, Number, eventValuePath),
      output: bpm,
      value: bpm,
    }, 'BPM'),
    createElement(RangeLabelled, {
      max: 24,
      min: -36,
      onChange: compose(dispatch, rootNoteSet, Number, eventValuePath),
      output: noteNameFromPitch(rootNote),
      value: rootNote,
    }, 'Root Note'),
    createElement(Selector, {
      defaultValue: selectedScale,
      handleChange: compose(dispatch, selectedScaleSet, eventValuePath),
      label: 'Scale',
      options: map(
        value => ({text: capitalize.words(value), value}),
        Object.keys(scales)
      ),
    }),
    createElement('div', null,
      createElement(
        ButtonPrimary,
        {to: '/controllers/keyboard/settings'},
        'Keyboard Settings'
      )
    )
  ))
