import { FiSettings } from "react-icons/fi";

import { useWindowsDimension } from "../../services/windowsDimension";
import { MenuButtonContainer } from "./styles";

import { useModal } from "../../context/ModalContext";

export const MenuButton = () => {
  const { width } = useWindowsDimension();
  const { openModal } = useModal();

  const isMobile = width < 960;

  return (
    <MenuButtonContainer>
      {isMobile ? (
        <button type="button" onClick={openModal}>
          <FiSettings size={30} color="#39415b" />
        </button>
      ) : (
        <button
          type="button"
          onClick={openModal}
          style={{ color: "rgba(255,255,255,.8)" }}
        >
          Settings
        </button>
      )}
    </MenuButtonContainer>
  );
};
