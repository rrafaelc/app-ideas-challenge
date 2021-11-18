import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";

type TimerContextType = {
  timer: number;
  formattedTimer: string;
  workingTimer: number;
  breakTimer: number;
  longBreakTimer: number;
  setWorkingTime: (time: number) => void;
  setBreakTime: (time: number) => void;
  setLongBreakTime: (time: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  skipTimer: () => void;
  sessionCount: number;
  isStart: boolean;
};

const TimerContext = createContext({} as TimerContextType);

export const TimerProvider: React.FC = ({ children }) => {
  const [timer, setTimer] = useState(25 * 60);
  const [formattedTimer, setFormattedTimer] = useState("25:00");

  const [workingTimer, setWorkingTimer] = useState(25 * 60);
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  const [longBreakTimer, setLongBreakTimer] = useState(15 * 60);

  const [sessionCount, setSessionCount] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [update, setUpdate] = useState(false);

  const formatSecondsToMinutes = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  }, []);

  const updateTimer = useCallback(() => {
    setIsStart(false);

    setTimer(workingTimer);
    setFormattedTimer(formatSecondsToMinutes(workingTimer));

    setWorkingTimer(workingTimer);
    setBreakTimer(breakTimer);
    setLongBreakTimer(longBreakTimer);

    setSessionCount(1);
  }, [workingTimer, breakTimer, longBreakTimer, formatSecondsToMinutes]);

  const resetTimer = useCallback(() => {
    setIsStart(false);
    setTimer(25 * 60);
    setFormattedTimer("25:00");
    setWorkingTimer(25 * 60);
    setBreakTimer(5 * 60);
    setLongBreakTimer(15 * 60);
    setSessionCount(1);
  }, []);

  const skipTimer = useCallback(() => {
    // I create the local variable,
    // because the sessionCount state is not updated yet
    // for use in switch case
    const sessionLocal = sessionCount + 1;
    setIsStart(false);

    // When the total pomodoro session is not reached yet
    if (sessionLocal <= 8) {
      setIsFinished(false);
    }

    setSessionCount(sessionCount + 1);

    switch (sessionLocal) {
      case 1:
      case 3:
      case 5:
      case 7:
        setTimer(workingTimer);
        setFormattedTimer(formatSecondsToMinutes(workingTimer));
        break;
      case 2:
      case 4:
      case 6:
        setTimer(breakTimer);
        setFormattedTimer(formatSecondsToMinutes(breakTimer));
        break;
      case 8:
        setTimer(longBreakTimer);
        setFormattedTimer(formatSecondsToMinutes(longBreakTimer));
        break;
      default:
        break;
    }

    // Pomodoro session is finished
    if (sessionLocal >= 8) return;
  }, [
    sessionCount,
    workingTimer,
    breakTimer,
    longBreakTimer,
    formatSecondsToMinutes,
  ]);

  const startTimer = useCallback(() => {
    // There is a delay of 1~2 second until the state is updated from interval in useEffect.
    // So decrease the timer by 1 second
    setTimer((prevTimer) => prevTimer - 1);

    if (isFinished) {
      skipTimer();
    }

    // When pomodoro session is finished, reset the timer,
    // if the user clicks the start button again
    if (sessionCount >= 8 && isFinished) {
      setSessionCount(1);
      setTimer(workingTimer);
      setFormattedTimer(formatSecondsToMinutes(workingTimer));
    }

    setIsFinished(false);
    setIsStart(true);
  }, [
    sessionCount,
    isFinished,
    skipTimer,
    setTimer,
    workingTimer,
    formatSecondsToMinutes,
  ]);

  const pauseTimer = useCallback(() => setIsStart(false), []);

  const setWorkingTime = useCallback(
    (time: number) => {
      if (isNaN(time)) {
        setUpdate(true);
        return;
      }

      const removePoint = time.toString().split(".")[0];
      setWorkingTimer(parseInt(removePoint));
      setUpdate(true);
    },
    [setUpdate]
  );

  const setBreakTime = useCallback(
    (time: number) => {
      if (isNaN(time)) {
        setUpdate(true);
        return;
      }

      const removePoint = time.toString().split(".")[0];
      setBreakTimer(parseInt(removePoint));
      setUpdate(true);
    },
    [setUpdate]
  );

  const setLongBreakTime = useCallback(
    (time: number) => {
      if (isNaN(time)) {
        setUpdate(true);
        return;
      }

      const removePoint = time.toString().split(".")[0];
      setLongBreakTimer(parseInt(removePoint));
      setUpdate(true);
    },
    [setUpdate]
  );

  useEffect(() => {
    // There is a delay of 1~2 second until the state is updated from interval in useEffect.
    // So format timer before timer is updated
    // And if the timer is 0, stop the format timer
    // Or else, its gonna be show a bug, when the timer is below 0
    if (timer >= 0) {
      setFormattedTimer(formatSecondsToMinutes(timer));
    }

    const interval = setInterval(() => {
      if (isStart) {
        setTimer(timer - 1);

        if (timer === 0) {
          setIsStart(false);
          setIsFinished(true);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isStart, timer, formatSecondsToMinutes]);

  useEffect(() => {
    if (update) {
      updateTimer();
    }

    setUpdate(false);
  }, [updateTimer, update]);

  return (
    <TimerContext.Provider
      value={{
        timer,
        formattedTimer,
        workingTimer,
        breakTimer,
        longBreakTimer,
        setWorkingTime,
        setBreakTime,
        setLongBreakTime,
        startTimer,
        pauseTimer,
        resetTimer,
        skipTimer,
        sessionCount,
        isStart,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }

  const {
    timer,
    formattedTimer,
    workingTimer,
    breakTimer,
    longBreakTimer,
    setWorkingTime,
    setBreakTime,
    setLongBreakTime,
    startTimer,
    pauseTimer,
    resetTimer,
    skipTimer,
    sessionCount,
    isStart,
  } = context;

  return {
    timer,
    formattedTimer,
    workingTimer,
    breakTimer,
    longBreakTimer,
    setWorkingTime,
    setBreakTime,
    setLongBreakTime,
    startTimer,
    pauseTimer,
    resetTimer,
    skipTimer,
    sessionCount,
    isStart,
  };
};
