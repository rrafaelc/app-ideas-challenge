import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import bell from "../assets/bell.mp3";

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
  enableSound: () => void;
  disableSound: () => void;
  isSoundEnabled: boolean;
  sessionCount: number;
  sessionName: string;
  isStarted: boolean;
  isFinished: boolean;
  isSkipped: boolean;
};

const TimerContext = createContext({} as TimerContextType);

export const TimerProvider: React.FC = ({ children }) => {
  const [timer, setTimer] = useState(25 * 60);
  const [formattedTimer, setFormattedTimer] = useState("25:00");

  const [workingTimer, setWorkingTimer] = useState(25 * 60);
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  const [longBreakTimer, setLongBreakTimer] = useState(10 * 60);

  const [sessionCount, setSessionCount] = useState(1);
  const [sessionName, setSessionName] = useState("Working");

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const playAudio = useCallback(() => {
    const audio = new Audio(bell);

    isSoundEnabled && audio.play();
  }, [isSoundEnabled]);

  const enableSound = useCallback(() => setIsSoundEnabled(true), []);
  const disableSound = useCallback(() => setIsSoundEnabled(false), []);

  const formatSecondsToMinutes = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  }, []);

  const updateTimer = useCallback(() => {
    setIsStarted(false);

    setTimer(workingTimer);
    setFormattedTimer(formatSecondsToMinutes(workingTimer));

    setWorkingTimer(workingTimer);
    setBreakTimer(breakTimer);
    setLongBreakTimer(longBreakTimer);

    setSessionCount(1);
    setSessionName("Working");
    setIsSkipped(true);
    setIsFinished(false);
  }, [workingTimer, breakTimer, longBreakTimer, formatSecondsToMinutes]);

  const resetTimer = useCallback(() => {
    setIsStarted(false);
    setTimer(25 * 60);
    setFormattedTimer("25:00");
    setWorkingTimer(25 * 60);
    setBreakTimer(5 * 60);
    setLongBreakTimer(10 * 60);
    setSessionCount(1);
    setSessionName("Working");
    setIsSkipped(true);
    setIsFinished(false);
  }, []);

  const skipTimer = useCallback(() => {
    // I create the local variable,
    // because the sessionCount state is not updated yet
    // for use in switch case
    const sessionLocal = sessionCount + 1;

    setIsSkipped(true);
    setIsStarted(false);

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
        setSessionName("Working");
        setTimer(workingTimer);
        setFormattedTimer(formatSecondsToMinutes(workingTimer));
        break;
      case 2:
      case 4:
      case 6:
        setSessionName("Break");
        setTimer(breakTimer);
        setFormattedTimer(formatSecondsToMinutes(breakTimer));
        break;
      case 8:
        setSessionName("Long Break");
        setTimer(longBreakTimer);
        setFormattedTimer(formatSecondsToMinutes(longBreakTimer));
        break;
      default:
        break;
    }
  }, [
    sessionCount,
    workingTimer,
    breakTimer,
    longBreakTimer,
    formatSecondsToMinutes,
  ]);

  const startTimer = useCallback(() => {
    if (isFinished) {
      skipTimer();
    }

    setIsSkipped(false);

    // When pomodoro session is finished, reset the timer,
    // if the user clicks the start button again
    if (sessionCount >= 8 && isFinished) {
      setSessionCount(1);
      setSessionName("Working");
      setTimer(workingTimer);
      setFormattedTimer(formatSecondsToMinutes(workingTimer));
    }

    setIsFinished(false);
    setIsStarted(true);
  }, [
    sessionCount,
    isFinished,
    skipTimer,
    setTimer,
    workingTimer,
    formatSecondsToMinutes,
  ]);

  const pauseTimer = useCallback(() => setIsStarted(false), []);

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
      if (isStarted) {
        setTimer(timer - 1);

        if (timer === 0) {
          playAudio();
          setIsStarted(false);
          setIsFinished(true);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, timer, formatSecondsToMinutes, playAudio]);

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
        enableSound,
        disableSound,
        isSoundEnabled,
        sessionCount,
        sessionName,
        isStarted,
        isFinished,
        isSkipped,
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
    enableSound,
    disableSound,
    isSoundEnabled,
    sessionCount,
    sessionName,
    isStarted,
    isFinished,
    isSkipped,
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
    enableSound,
    disableSound,
    isSoundEnabled,
    sessionCount,
    sessionName,
    isStarted,
    isFinished,
    isSkipped,
  };
};
