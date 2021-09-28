import React from 'react';

import {
  Modal as Modall,
  ModalContainer,
  Close,
  Colors,
  Color,
  ColorCode,
  Size,
  ModalButton,
} from './styles';

interface ModalProps {
  showModal: boolean;
  setModal: Function;
  setColor: Function;
  setSizeLevel: Function;
  color: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setModal,
  setColor,
  setSizeLevel,
  color,
}) => {
  return (
    <ModalContainer className={showModal ? 'active' : ''}>
      <Modall show={showModal}>
        <Close onClick={() => setModal(false)}>X</Close>
        <Colors>
          <Color colorCode="#FFFFFF" onClick={() => setColor('#FFFFFF')} />
          <Color colorCode="#F08080" onClick={() => setColor('#F08080')} />
          <Color colorCode="#DE3163" onClick={() => setColor('#DE3163')} />
          <Color colorCode="#FF00FF" onClick={() => setColor('#FF00FF')} />
          <Color colorCode="#00FF00" onClick={() => setColor('#00FF00')} />
          <Color colorCode="#FFFF00" onClick={() => setColor('#FFFF00')} />
          <Color colorCode="#0000FF" onClick={() => setColor('#0000FF')} />
          <Color colorCode="#A5E7C8" onClick={() => setColor('#A5E7C8')} />
          <Color colorCode="#DC7633" onClick={() => setColor('#DC7633')} />
          <Color colorCode="#76D7C4" onClick={() => setColor('#76D7C4')} />
          <Color colorCode="#CB4335" onClick={() => setColor('#CB4335')} />
          <Color colorCode="#00FFFF" onClick={() => setColor('#00FFFF')} />
        </Colors>
        <ColorCode colorCode={color}>
          <span>Color code</span>
          {color}
        </ColorCode>
        <Size>
          <button onClick={() => setSizeLevel(1)}>Small</button>
          <button onClick={() => setSizeLevel(2)}>Normal</button>
          <button onClick={() => setSizeLevel(3)}>Big</button>
        </Size>
        <ModalButton onClick={() => setModal(false)}>OK</ModalButton>
      </Modall>
    </ModalContainer>
  );
};

export default Modal;
