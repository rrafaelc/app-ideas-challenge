import { ButtonsContainer, Btns, RoundBtn } from "./styles";
import { FiPlay, FiPause } from "react-icons/fi";

export const Buttons = () => {
  return (
    <ButtonsContainer>
      <Btns>
        <button>Reset</button>
        <button>Skip</button>
      </Btns>
      <RoundBtn aria-label="Pause">
        <FiPause size={35} />
      </RoundBtn>
    </ButtonsContainer>
  );
};
