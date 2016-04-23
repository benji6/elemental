import React from 'react'
import Module, {Range} from './Module'
import SelectOscType from './SelectOscType'

export default ({lfo: {gain, frequency, type}, updateLfo}) =>
  <div>
    <Module title='LFO'>
      <SelectOscType {...{
        defaultValue: type,
        onChange: e => updateLfo('type', e.target.value)
      }} />
      <Range {...{
        defaultValue: frequency,
        label: 'Rate',
        max: 16,
        min: 0.01,
        onInput: e => updateLfo('frequency', Number(e.target.value)),
        step: 0.01,
      }} />
      <Range {...{
        defaultValue: gain,
        displayValue: Math.round(gain),
        label: 'Amount',
        max: 1024,
        min: 0,
        onInput: e => updateLfo('gain', Number(e.target.value)),
        step: 0.01,
      }} />
    </Module>
  </div>