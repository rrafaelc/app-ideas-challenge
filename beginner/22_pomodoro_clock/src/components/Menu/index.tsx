import { useEffect, useState } from "react";
import { MenuContainer, Modal } from "./styles";
import { VscDebugRestart } from "react-icons/vsc";

import hand from "../../assets/clarity_cursor-hand-click-line.svg";

import { NewValue } from "./NewValue";
import { useModal } from "../../context/ModalContext";
import { useTimer } from "../../context/TimerContext";

let whoCalled = "";

export const Menu = () => {
  const [modalTimer, setModalTimer] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const { closeModal } = useModal();
  const {
    workingTimer,
    breakTimer,
    longBreakTimer,
    setWorkingTime,
    setBreakTime,
    setLongBreakTime,
  } = useTimer();

  const handleModal = () => setOpenModal(!openModal);

  const setTimer = (value: number) => setModalTimer(value);

  const handleReset = () => {
    setWorkingTime(25 * 60);
    setBreakTime(5 * 60);
    setLongBreakTime(15 * 60);
  };

  useEffect(() => {
    const handleWorkingTime = (value: number) => setWorkingTime(value * 60);
    const handleBreakTime = (value: number) => setBreakTime(value * 60);
    const handleLongBreakTime = (value: number) => setLongBreakTime(value * 60);

    switch (whoCalled) {
      case "workingTimer":
        handleWorkingTime(modalTimer);
        break;
      case "breakTimer":
        handleBreakTime(modalTimer);
        break;
      case "longBreakTimer":
        handleLongBreakTime(modalTimer);
        break;
      default:
        break;
    }

    setModalTimer(0);
    whoCalled = "";
  }, [modalTimer, setWorkingTime, setBreakTime, setLongBreakTime]);

  return (
    <MenuContainer>
      {openModal && <NewValue close={handleModal} setTimer={setTimer} />}
      <Modal>
        <p>Settings</p>

        <div id="options">
          <button
            title="Working Session"
            aria-label="Working Session"
            onClick={() => {
              whoCalled = "workingTimer";
              handleModal();
            }}
          >
            <span>Working Session</span>
            <div>
              <span>{workingTimer / 60} min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
          <button
            title="Break Session"
            aria-label="Break Session"
            onClick={() => {
              whoCalled = "breakTimer";
              handleModal();
            }}
          >
            <span>Break Session</span>
            <div>
              <span>{breakTimer / 60} min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
          <button
            title="Long Break Session"
            aria-label="Long Break Session"
            onClick={() => {
              whoCalled = "longBreakTimer";
              handleModal();
            }}
          >
            <span>Long Break Session</span>
            <div>
              <span>{longBreakTimer / 60} min</span>
              <img src={hand} alt="Press Button" />
            </div>
          </button>
        </div>

        <div id="btns">
          <button
            id="icon"
            title="Default"
            aria-label="Default"
            onClick={handleReset}
          >
            <VscDebugRestart size={35} />
          </button>
          <button
            id="ok"
            title="Ok"
            aria-label="Ok"
            type="button"
            onClick={closeModal}
          >
            OK
          </button>
        </div>
      </Modal>
    </MenuContainer>
  );
};
