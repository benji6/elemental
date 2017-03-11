import {map, pick} from 'ramda'
import localForage from 'localforage'
import {createStore} from 'redux'
import {autoRehydrate, createTransform, persistStore} from 'redux-persist'
import reducer from './reducer'
import enhancer from './enhancer'

const store = createStore(reducer, enhancer, autoRehydrate())

export default store
const saveFilterTransform = (whitelist, keys) => createTransform(pick(keys), null, {whitelist})

export const rehydratePromise = new Promise((resolve, reject) => persistStore(store, {
  debounce: 100,
  storage: localForage,
  transforms: [
    saveFilterTransform('controlPad', ['instrument', 'noScale', 'octave', 'portamento', 'range']),
    createTransform(map(pick(['id', 'steps'])), null, {whitelist: 'patternsBeat'}),
    createTransform(map(pick(['id', 'steps'])), null, {whitelist: 'patternsSynth'}),
    saveFilterTransform('song', ['steps']),
  ],
  whitelist: [
    'controlPad',
    'keyboard',
    'settings',
  ],
}, (err, state) => {
  if (err) reject(err)
  else resolve(state)
}))
