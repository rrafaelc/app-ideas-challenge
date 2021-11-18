import { useEffect, useState } from "react";
import { useTimer } from "../../context/TimerContext";

import { FiPlay, FiPause } from "react-icons/fi";

import { ButtonsContainer, Btns, RoundBtn } from "./styles";

export const Buttons = () => {
  const {
    isStart,
    startTimer,
    pauseTimer,
    resetTimer,
    skipTimer,
    sessionCount,
  } = useTimer();

  const [disableSkip, setDisableSkip] = useState(false);

  const handleSkip = () => {
    if (!disableSkip) {
      skipTimer();
    }
  };

  useEffect(() => {
    if (sessionCount >= 8) {
      setDisableSkip(true);
    } else {
      setDisableSkip(false);
    }
  }, [sessionCount]);

  return (
    <ButtonsContainer>
      <Btns>
        <button type="button" onClick={resetTimer}>
          Reset
        </button>
        <button type="button" onClick={handleSkip}>
          Skip
        </button>
      </Btns>
      {isStart ? (
        <RoundBtn title="Pause" aria-label="Pause" onClick={pauseTimer}>
          <FiPause size={35} />
        </RoundBtn>
      ) : (
        <RoundBtn title="Play" aria-label="Play" onClick={startTimer}>
          <FiPlay size={35} />
        </RoundBtn>
      )}
    </ButtonsContainer>
  );
};
