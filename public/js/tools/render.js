"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),_ramda=require("ramda");exports["default"]=_ramda.curry(_ramda.flip(_reactDom2["default"].render))(document.querySelector("#app")),module.exports=exports["default"];