import React, { useCallback, useEffect, useState } from 'react';

import { Container, Title, Buttons, Display, Less, More } from './styles';

interface SpeedButtonProps {
  setSpeed: Function;
}

const SpeedButton: React.FC<SpeedButtonProps> = ({ setSpeed }) => {
  const [speedNumber, setSpeedNumber] = useState(1);

  const speedDown = useCallback(() => {
    if (speedNumber <= 1) {
      setSpeedNumber(1);
      return;
    }

    setSpeedNumber(speedNumber - 1);
  }, [speedNumber]);

  const speedUp = useCallback(() => {
    if (speedNumber >= 5) {
      setSpeedNumber(5);
      return;
    }
    setSpeedNumber(speedNumber + 1);
  }, [speedNumber]);

  useEffect(() => {
    switch (speedNumber) {
      case 1:
        setSpeed(1100);
        break;
      case 2:
        setSpeed(700);
        break;
      case 3:
        setSpeed(400);
        break;
      case 4:
        setSpeed(200);
        break;
      case 5:
        setSpeed(100);
        break;
    }
  }, [speedNumber, setSpeed]);

  return (
    <Container>
      <Title>Speed</Title>
      <Buttons>
        <Less onClick={speedDown}>-</Less>
        <Display>{speedNumber}</Display>
        <More onClick={speedUp}>+</More>
      </Buttons>
    </Container>
  );
};

export default SpeedButton;
