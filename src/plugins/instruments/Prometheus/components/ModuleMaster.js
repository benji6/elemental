import React from 'react'
import Module, {Range} from './Module'

export default ({master: {gain, pan}, updateMaster}) =>
  <div>
    <Module title='Master'>
      <Range {...{
        defaultValue: gain,
        label: 'Gain',
        max: 1.5,
        min: 0,
        onInput: e => updateMaster('gain', Number(e.target.value)),
        step: 0.01,
      }} />
      <Range {...{
        defaultValue: pan,
        label: 'Pan',
        max: 1,
        min: -1,
        onInput: e => updateMaster('pan', Number(e.target.value)),
        step: 0.01,
      }} />
    </Module>
  </div>
