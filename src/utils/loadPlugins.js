import store from '../store'
import Ariadne from '../plugins/instruments/Ariadne'
import Fate from '../plugins/instruments/Fate'
import Prometheus from '../plugins/instruments/Prometheus'
import Delay from '../plugins/effects/Delay'
import GainPan from '../plugins/effects/GainPan'
import Reverb from '../plugins/effects/Reverb'
import {
  addEffectToChannel,
  addInstrumentToChannel,
  instantiateEffect,
  instantiateInstrument,
  loadPluginEffect,
  loadPluginInstrument
} from '../actions'

store.dispatch(loadPluginInstrument({constructor: Ariadne, name: 'Ariadne'}))
store.dispatch(loadPluginInstrument({constructor: Fate, name: 'Fate'}))
store.dispatch(loadPluginInstrument({constructor: Prometheus, name: 'Prometheus'}))

store.dispatch(loadPluginEffect({constructor: Delay, name: 'Delay'}))
store.dispatch(loadPluginEffect({constructor: GainPan, name: 'GainPan'}))
store.dispatch(loadPluginEffect({constructor: Reverb, name: 'Reverb'}))

store.dispatch(instantiateInstrument({name: 'Ariadne', plugin: 'Ariadne'}))
store.dispatch(instantiateInstrument({name: 'Fate', plugin: 'Fate'}))
store.dispatch(instantiateInstrument({name: 'Prometheus', plugin: 'Prometheus'}))

store.dispatch(instantiateEffect({name: 'Delay', plugin: 'Delay'}))
store.dispatch(instantiateEffect({name: 'GainPan', plugin: 'GainPan'}))
store.dispatch(instantiateEffect({name: 'Reverb', plugin: 'Reverb'}))

store.dispatch(addInstrumentToChannel({channel: 0, name: 'Ariadne'}))
store.dispatch(addInstrumentToChannel({channel: 0, name: 'Fate'}))
store.dispatch(addInstrumentToChannel({channel: 0, name: 'Prometheus'}))

store.dispatch(addEffectToChannel({channel: 0, name: 'Delay'}))
