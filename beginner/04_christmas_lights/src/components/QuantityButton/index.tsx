import React, { useCallback } from 'react';

import { Container, Title, Buttons, Display, Less, More } from './styles';

interface QuantityButtonProps {
  quantity: number;
  setQuantity: Function;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  quantity,
  setQuantity,
}) => {
  const less = useCallback(() => {
    if (quantity <= 1) {
      setQuantity(1);
      return;
    }

    setQuantity(quantity - 1);
  }, [quantity, setQuantity]);

  const more = useCallback(() => {
    if (quantity >= 99) {
      setQuantity(99);
      return;
    }

    setQuantity(quantity + 1);
  }, [quantity, setQuantity]);

  return (
    <Container>
      <Title>Quantity</Title>
      <Buttons>
        <Less onClick={less}>-</Less>
        <Display>{quantity}</Display>
        <More onClick={more}>+</More>
      </Buttons>
    </Container>
  );
};

export default QuantityButton;
