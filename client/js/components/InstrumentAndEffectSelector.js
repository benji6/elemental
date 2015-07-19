import AltContainer from 'alt/AltContainer';
import React from 'react';
import EffectSelector from './EffectSelector';
import EffectStore from '../stores/EffectStore';
import InstrumentSelector from './InstrumentSelector';
import InstrumentStore from '../stores/InstrumentStore';
import ModalOKButton from './atoms/ModalOKButton';

export default class RootNoteContainer extends React.Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal-window">
          <div className="modal-contents">
            <AltContainer store={InstrumentStore}>
              <InstrumentSelector />
            </AltContainer>
            <AltContainer store={EffectStore}>
              <EffectSelector />
            </AltContainer>
            <ModalOKButton />
          </div>
        </div>
      </div>
    );
  }
}
