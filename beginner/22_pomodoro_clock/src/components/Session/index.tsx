import {
  SessionContainer,
  Path1,
  Path2,
  Path3,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
} from "./styles";

import { useTimer } from "../../context/TimerContext";

export const Session = () => {
  const { sessionName, sessionCount } = useTimer();

  return (
    <SessionContainer sessionCount={sessionCount}>
      <p>{sessionName} Session</p>

      <svg
        width="182"
        viewBox="0 0 182 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 15.5H56" stroke="#39415B" strokeWidth="3" />
        <Path1
          sessionCount={sessionCount}
          d="M24 15.5H56"
          stroke="#8E2B24"
          strokeWidth="3"
        />

        <path d="M74 15.5H107" stroke="#39415B" strokeWidth="3" />
        <Path2
          sessionCount={sessionCount}
          d="M74 15.5H107"
          stroke="#8E2B24"
          strokeWidth="3"
        />

        <path d="M126 15.5H158" stroke="#39415B" strokeWidth="3" />
        <Path3
          sessionCount={sessionCount}
          d="M126 15.5H158"
          stroke="#8E2B24"
          strokeWidth="3"
        />

        <Circle1
          sessionCount={sessionCount}
          cx="15"
          cy="15"
          r="10"
          fill="#39415B"
        />
        <Circle2
          sessionCount={sessionCount}
          cx="65"
          cy="15"
          r="10"
          fill="#39415B"
        />
        <Circle3
          sessionCount={sessionCount}
          cx="116"
          cy="15"
          r="10"
          fill="#39415B"
        />
        <Circle4
          sessionCount={sessionCount}
          cx="167"
          cy="15"
          r="10"
          fill="#39415B"
        />
      </svg>
    </SessionContainer>
  );
};
