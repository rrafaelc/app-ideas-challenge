import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface BoxProps {
  start: boolean;
  interval: number;
  colors: string[];
  setStart: (start: boolean) => void;
}

const Box: React.FC<BoxProps> = ({ colors, start, interval, setStart }) => {
  const [count, setCount] = useState(-1);

  if (count === colors.length) {
    setCount(0);
  }

  useEffect(() => {
    if (start) {
      const id = setInterval(
        () => setCount((count) => count + 1),
        interval * 1000,
      );
      return () => {
        setCount(-1);
        clearInterval(id);
      };
    }
  }, [start, interval]);

  return (
    <Container
      interval={interval}
      style={{ backgroundColor: colors[count] }}
    ></Container>
  );
};

export default Box;
