import React, { useEffect, useState } from 'react';

import Modal from './Modal';
import { Line, Light, Base, Circle } from './styles';

interface ColorProps {
  color?: string;
  active?: boolean;
}

const ChristmasLight: React.FC<ColorProps> = ({ color, active }) => {
  const [showModal, setShowModal] = useState(false);
  const [col, setCol] = useState(color);
  const [sizeLevel, setSizeLevel] = useState(
    Math.floor(Math.random() * (3 - 1 + 1) + 1),
  );
  const [size, setSize] = useState(0);

  useEffect(() => {
    switch (sizeLevel) {
      case 1:
        setSize(30);
        break;
      case 2:
        setSize(50);
        break;
      case 3:
        setSize(70);
        break;
    }
  }, [sizeLevel]);

  return (
    <div>
      <Line />
      <Light>
        <Base />
        <Circle
          size={size}
          color={col}
          active={active}
          onClick={() => setShowModal(true)}
        />
      </Light>
      <Modal
        showModal={showModal}
        setModal={setShowModal}
        setColor={setCol}
        setSizeLevel={setSizeLevel}
        color={col!}
      />
    </div>
  );
};

export default ChristmasLight;
