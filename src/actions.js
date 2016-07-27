const createActions = function * () {
  const createAction = type => payload => ({type, payload})
  while (true) {
    const sym = Symbol()
    yield [sym, createAction(sym)]
  }
}

export const [
  [ADD_CHANNEL, addChannel],
  [ADD_EFFECT_TO_CHANNEL, addEffectToChannel],
  [ADD_EFFECT, addEffect],
  [ADD_INSTRUMENT_TO_CHANNEL, addInstrumentToChannel],
  [APP_INITIALIZE, appInitialize],
  [BPM_SET, bpmSet],
  [INSTANTIATE_EFFECT, instantiateEffect],
  [INSTANTIATE_INSTRUMENT, instantiateInstrument],
  [KEYBOARD_MONOPHONIC_SET, keyboardMonophonicSet],
  [LOAD_PLUGIN_EFFECT, loadPluginEffect],
  [LOAD_PLUGIN_INSTRUMENT, loadPluginInstrument],
  [PATTERN_ACTIVE_NOTES_SET, patternActiveNotesSet],
  [PATTERN_BEAT_ADD, patternBeatAdd],
  [PATTERN_BEAT_CELL_CLICK, patternBeatCellClick],
  [PATTERN_BEAT_PLAYING_START, patternBeatPlayingStart],
  [PATTERN_BEAT_PLAYING_STOP, patternBeatPlayingStop],
  [PATTERN_DELETE, patternDelete],
  [PATTERN_INSTRUMENT_SET, patternInstrumentSet],
  [PATTERN_MARKER_POSITION_SET, patternMarkerPositionSet],
  [PATTERN_NEXT_LOOP_END_TIME_SET, patternNextLoopEndTimeSet],
  [PATTERN_SYNTH_ADD, patternSynthAdd],
  [PATTERN_SYNTH_CELL_CLICK, patternSynthCellClick],
  [PATTERN_SYNTH_PLAYING_START, patternSynthPlayingStart],
  [PATTERN_SYNTH_PLAYING_STOP, patternSynthPlayingStop],
  [PATTERN_VOLUME_SET, patternVolumeSet],
  [PATTERN_X_LENGTH_SET, patternXLengthSet],
  [PATTERNS_ALL_PLAYING_STOP, patternsAllPlayingStop],
  [REMOVE_CHANNEL, removeChannel],
  [REMOVE_EFFECT_FROM_CHANNEL, removeEffectFromChannel],
  [REMOVE_INSTRUMENT_FROM_CHANNEL, removeInstrumentFromChannel],
  [SAMPLE_FETCHED, sampleFetched],
  [SONG_ACTIVE_NOTES_SET, songActiveNotesSet],
  [SONG_PLAYING_START, songPlayingStart],
  [SONG_PLAYING_STOP, songPlayingStop],
  [UPDATE_CONTROL_PAD_INSTRUMENT, updateControlPadInstrument],
  [UPDATE_CONTROL_PAD_NO_SCALE, updateControlPadNoScale],
  [UPDATE_CONTROL_PAD_OCTAVE, updateControlPadOctave],
  [UPDATE_CONTROL_PAD_PORTAMENTO, updateControlPadPortamento],
  [UPDATE_CONTROL_PAD_RANGE, updateControlPadRange],
  [UPDATE_KEYBOARD_INSTRUMENT, updateKeyboardInstrument],
  [UPDATE_KEYBOARD_OCTAVE, updateKeyboardOctave],
  [UPDATE_KEYBOARD_VOLUME, updateKeyboardVolume],
  [UPDATE_ROOT_NOTE, updateRootNote],
  [UPDATE_SELECTED_SCALE, updateSelectedScale],
] = createActions()
