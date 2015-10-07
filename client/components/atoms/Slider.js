import React from 'react'; // eslint-disable-line

export default ({max, min, onChange, rootNote, type, value, output}) =>
  <div className="slider">
    <div>
      <output>{output}</output>
    </div>
    <input max="24"
           min="-36"
           onChange={onChange}
           type="range"
           value={rootNote} />
  </div>;
