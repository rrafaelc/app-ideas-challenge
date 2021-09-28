import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  onClick: () => void;
  active: boolean;
}

const OnOff: React.FC<ButtonProps> = ({ onClick, active }) => (
  <Button active={active} onClick={onClick}>
    {active ? 'ON' : 'OFF'}
  </Button>
);

export default OnOff;
