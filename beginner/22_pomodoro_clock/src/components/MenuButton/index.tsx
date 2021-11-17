import { FiSettings } from "react-icons/fi";
import { useModal } from "../../context/ModalContext";

import { MenuButtonContainer } from "./styles";

export const MenuButton = () => {
  const { openModal } = useModal();

  return (
    <MenuButtonContainer>
      <button type="button" aria-label="Settings" onClick={openModal}>
        <FiSettings size={30} color="#39415b" />
      </button>
    </MenuButtonContainer>
  );
};
