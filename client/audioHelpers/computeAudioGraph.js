import {map, zipObj} from 'ramda';
import createEffectCustomNodeParams from './createEffectCustomNodeParams';
import createInstrumentCustomNodeParams from './createInstrumentCustomNodeParams';
import {mapIndexed} from '../tools/indexedIterators';

export default ({arpeggiator,
                 currentAudioGraph,
                 effects,
                 id,
                 instrument,
                 modulation,
                 pitch,
                 rootNote,
                 sources,
                 startTime,
                 stopTime}) => {
  const effectsLength = effects.length;
  const effectCustomNodeParams = mapIndexed(createEffectCustomNodeParams,
                                            effects);
  const sourceCustomNodeParams = map(createInstrumentCustomNodeParams({arpeggiator,
                                                                       effectsLength,
                                                                       modulation,
                                                                       pitch: pitch + rootNote,
                                                                       rootNote,
                                                                       startTime,
                                                                       stopTime}),
                                     sources);

  // assign ids based on index in this array
  const customNodeParams = [...effectCustomNodeParams,
                            ...sourceCustomNodeParams];
  // ids of newAudioGraphChunk should also contain controller
  // (ie control pad / pattern-editor etc)
  const newAudioGraphChunk = zipObj(mapIndexed((_, i) => `${instrument}-${pitch}-${i}`,
                                               customNodeParams),
                                    customNodeParams);
  return {...currentAudioGraph, ...newAudioGraphChunk};
};
