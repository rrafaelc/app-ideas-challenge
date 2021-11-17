import { useState } from "react";
import { MenuContainer, Modal } from "./styles";
import { VscDebugRestart } from "react-icons/vsc";

import hand from "../../assets/clarity_cursor-hand-click-line.svg";

import { NewValue } from "../NewValue";
import { useModal } from "../../context/ModalContext";

export const MenuMobile = () => {
  const [isOpenNewValue, setIsOpenNewValue] = useState(false);
  const { closeModal } = useModal();

  const handleOnClick = () => {
    setIsOpenNewValue(!isOpenNewValue);
  };

  return (
    <MenuContainer>
      {isOpenNewValue && <NewValue close={handleOnClick} />}
      <Modal>
        <p>Settings</p>

        <div id="options">
          <button onClick={handleOnClick}>
            <span>Working Session</span>
            <div>
              <span>25 min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
          <button onClick={handleOnClick}>
            <span>Break Session</span>
            <div>
              <span>5 min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
          <button onClick={handleOnClick}>
            <span>Long Break Session</span>
            <div>
              <span>15 min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
        </div>

        <div id="btns">
          <button id="icon" title="Default">
            <VscDebugRestart size={35} />
          </button>
          <button id="ok" type="button" onClick={closeModal}>
            OK
          </button>
        </div>
      </Modal>
    </MenuContainer>
  );
};
