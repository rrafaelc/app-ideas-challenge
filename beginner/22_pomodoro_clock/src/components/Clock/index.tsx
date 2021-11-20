import { useEffect, useState } from "react";
import { useTimer } from "../../context/TimerContext";

import { ClockContainer } from "./styles";

export const Clock = () => {
  const {
    formattedTimer,
    workingTimer,
    breakTimer,
    longBreakTimer,
    sessionCount,
    isStarted,
    isFinished,
    isSkipped,
  } = useTimer();

  const [seconds, setSeconds] = useState(workingTimer);

  useEffect(() => {
    switch (sessionCount) {
      case 1:
      case 3:
      case 5:
      case 7:
        setSeconds(workingTimer);
        break;
      case 2:
      case 4:
      case 6:
        setSeconds(breakTimer);
        break;
      case 8:
        setSeconds(longBreakTimer);
        break;
      default:
        break;
    }
  }, [sessionCount, workingTimer, breakTimer, longBreakTimer]);

  return (
    <ClockContainer
      seconds={seconds}
      isStarted={isStarted}
      isSkipped={isSkipped}
      isFinished={isFinished}
    >
      <div id="countdown-number">{formattedTimer}</div>
      <svg className="c1" viewBox="0 0 40 40" xmlns="http//www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" />
      </svg>
      <svg className="c2" viewBox="0 0 40 40" xmlns="http//www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" />
      </svg>
    </ClockContainer>
  );
};
