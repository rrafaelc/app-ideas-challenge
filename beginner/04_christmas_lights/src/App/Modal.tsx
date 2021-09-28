import React from 'react';

import { Modal as Modall, ModalContainer, Close, Message } from './styles';

interface ModalProps {
  showModal: boolean;
  setModal: Function;
}

const Modal: React.FC<ModalProps> = ({ showModal, setModal }) => {
  return (
    <>
      {showModal && (
        <ModalContainer>
          <Modall>
            <Close onClick={() => setModal(false)}>X</Close>
            <Message>
              Tip: You can click on the circle to change the size and color.
            </Message>
          </Modall>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
