import { Clock } from "../components/Clock";
import { Session } from "../components/Session";
import { Buttons } from "../components/Buttons";
import { MenuButton } from "../components/MenuButton";

import { ModalProvider } from "../context/ModalContext";

import { PomodoroContainer } from "./styles";

export const Pomodoro = () => {
  return (
    <ModalProvider>
      <PomodoroContainer>
        <MenuButton />
        <Clock />
        <Session />
        <Buttons />
      </PomodoroContainer>
    </ModalProvider>
  );
};
