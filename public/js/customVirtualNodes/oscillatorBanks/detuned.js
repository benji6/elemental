"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(e){var t=e.gain,u=e.frequency;return[{output:["output"],id:0,node:"gain",params:{gain:t}},{output:0,id:1,node:"oscillator",params:{detune:-2,frequency:u,type:"sawtooth"}},{output:0,id:2,node:"oscillator",params:{detune:-5,frequency:u-12,type:"triangle"}},{output:0,id:3,node:"oscillator",params:{detune:4,frequency:u,type:"square"}}]},module.exports=exports["default"];