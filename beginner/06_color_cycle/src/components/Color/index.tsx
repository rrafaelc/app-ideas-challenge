import React, {
  FormEvent,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';

import { Input } from './styles';

interface ColorProps extends InputHTMLAttributes<HTMLInputElement> {
  setColor: (color: string) => void;
}

const Color: React.FC<ColorProps> = ({
  setColor,

  ...rest
}) => {
  const [outlineColor, setOutlineColor] = useState('transparent');

  const handleOnchange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const color = event.currentTarget.value;
      setColor(`#${color}`);
      setOutlineColor(`#${color}`);
    },
    [setColor],
  );

  return (
    <Input
      outlineColor={outlineColor}
      placeholder="FF0000"
      onChange={handleOnchange}
      {...rest}
    />
  );
};

export default Color;
