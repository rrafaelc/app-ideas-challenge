import React, { useEffect, useState, useCallback } from 'react';

import ChristmasLight from '../components/ChristmasLight';
import QuantityButton from '../components/QuantityButton';
import OnOff from '../components/OnOff/';
import SpeedButton from '../components/SpeedButton';
import Modal from './Modal';

import { Container, Lights, Controls } from './styles';

const App: React.FC = () => {
  const [active, setActive] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [quantity, setQuantity] = useState(7);
  const [speed, setSpeed] = useState(1100);
  const [showModal, setShowModal] = useState(true);

  setTimeout(() => setShowModal(false), 8000);

  const colors = [
    '#FFFFFF',
    '#F08080',
    '#DE3163',
    '#FF00FF',
    '#00FF00',
    '#FFFF00',
    '#0000FF',
    '#A5E7C8',
    '#DC7633',
    '#76D7C4',
    '#CB4335',
    '#00FFFF',
  ];

  const lights = [];

  function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  }

  const startAnimation = useCallback(() => {
    setTimeout(() => {
      setActive(!active);
    }, speed);
  }, [active, speed]);

  for (let i = 0; i < quantity; i++) {
    if (i % 2 === 0) {
      lights.push(
        <ChristmasLight
          key={i}
          active={!animate ? false : active}
          color={getRandomColor()}
        />,
      );
    } else {
      lights.push(
        <ChristmasLight
          key={i}
          active={!animate ? false : !active}
          color={getRandomColor()}
        />,
      );
    }
  }

  // For Random active light
  // for (let i = 0; i < quantity; i++) {
  //   const randomActive = () => {
  //     return Math.random() < 0.5;
  //   };

  //   lights.push(
  //     <ChristmasLight
  //       key={i}
  //       active={!animate ? false : randomActive() ? active : !active}
  //       color={getRandomColor()}
  //     />,
  //   );
  // }

  useEffect(() => {
    if (animate) {
      startAnimation();
    }
  }, [animate, startAnimation]);

  return (
    <Container>
      <Lights>{lights}</Lights>

      <Controls>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        <OnOff active={animate} onClick={() => setAnimate(!animate)} />
        <SpeedButton setSpeed={setSpeed} />
      </Controls>
      <Modal showModal={showModal} setModal={setShowModal} />
    </Container>
  );
};

export default App;
