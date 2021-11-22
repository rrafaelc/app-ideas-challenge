import { useTimer } from "../../context/TimerContext";

import { ClockContainer } from "./styles";

export const Clock = () => {
  const { formattedTimer, isFinished } = useTimer();

  return (
    <ClockContainer isFinished={isFinished}>
      <div id="countdown-number">{formattedTimer}</div>
      <svg className="c1" viewBox="0 0 40 40" xmlns="http//www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" />
      </svg>
    </ClockContainer>
  );
};
