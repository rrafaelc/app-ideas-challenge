import React, { useCallback, useEffect, useState, FormEvent } from 'react';

import Box from '../components/Box';
import Color from '../components/Color';

import { Container, Options, ColorsCode } from './styles';

const Dashboard: React.FC = () => {
  const [start, setStart] = useState(false);
  const [interval, setInterval] = useState(1);

  const [color01, setColor01] = useState('');
  const [color02, setColor02] = useState('');
  const [color03, setColor03] = useState('');
  const [color04, setColor04] = useState('');
  const [color05, setColor05] = useState('');
  const [color06, setColor06] = useState('');
  const [inc, setInc] = useState(0);

  const [colors, setColors] = useState([
    color01,
    color02,
    color03,
    color04,
    color05,
    color06,
  ]);

  const handleOnchangeInterval = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      console.log(value);

      setInterval(parseFloat(value));
    },
    [],
  );

  const checkColor = useCallback(() => {
    if (inc < 0) {
      setStart(false);
      alert('Color typed incorret');
      setInc((inc) => inc + 1);
    }

    if (isNaN(interval)) {
      setInterval(1);
    }

    if (interval < 1) {
      setInterval(1);
    }
  }, [inc, interval]);

  useEffect(() => {
    if (start) {
      setColors([color01, color02, color03, color04, color05, color06]);
      checkColor();
    }
  }, [start, color01, color02, color03, color04, color05, color06, checkColor]);

  return (
    <Container>
      <Box
        setStart={setStart}
        colors={colors}
        start={start}
        interval={interval}
      />

      <Options>
        <button
          className="start"
          onClick={() => setStart(!start)}
          type="button"
        >
          {start ? 'Stop' : 'Start'}
        </button>

        <div className="interval">
          <label htmlFor="interval">Interval</label>

          <input
            title={`${interval ? interval : '1'} seconds`}
            type="number"
            min={1}
            onChange={handleOnchangeInterval}
            value={interval}
            disabled={start}
          />
        </div>
      </Options>

      <ColorsCode>
        <div>
          <label htmlFor="color01">Color 01</label>
          <Color name="color01" setColor={setColor01} disabled={start} />
          <label htmlFor="color02">Color 02</label>
          <Color name="color02" setColor={setColor02} disabled={start} />
          <label htmlFor="color03">Color 03</label>
          <Color name="color03" setColor={setColor03} disabled={start} />
        </div>
        <div>
          <label htmlFor="color04">Color 04</label>
          <Color name="color04" setColor={setColor04} disabled={start} />
          <label htmlFor="color05">Color 05</label>
          <Color name="color05" setColor={setColor05} disabled={start} />
          <label htmlFor="color06">Color 06</label>
          <Color name="color06" setColor={setColor06} disabled={start} />
        </div>
      </ColorsCode>
    </Container>
  );
};

export default Dashboard;
