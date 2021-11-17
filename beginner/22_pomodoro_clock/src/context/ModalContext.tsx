import React, { createContext, useContext, useState } from "react";

import { Menu } from "../components/Menu";

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext({} as ModalContextType);

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {isOpen && <Menu />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const { openModal, closeModal } = context;

  return {
    openModal,
    closeModal,
  };
};
