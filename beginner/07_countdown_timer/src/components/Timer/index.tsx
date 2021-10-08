import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface TimerProps {
  name: string;
  date: string;
  onClick: () => void;
}

const Timer: React.FC<TimerProps> = ({ name, date, onClick }) => {
  const [time, setTime] = useState(59);
  const [seconds, setSeconds] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [hours, setHours] = useState('0');
  const [days, setDays] = useState('0');

  const futureDate = new Date(date).getTime();

  function msToTime(t: number) {
    const ms = t % 1000;
    t = (t - ms) / 1000;
    const secs = t % 60;
    t = (t - secs) / 60;
    const mins = t % 60;
    t = (t - mins) / 60;
    const hrs = t % 24;
    const days = Math.ceil((t - hrs) / 24);

    setSeconds(('0' + secs).slice(-2));
    setMinutes(('0' + mins).slice(-2));
    setHours(('0' + hrs).slice(-2));
    setDays(days.toString());
  }

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date().getTime();
      setTime(futureDate - date);
      msToTime(time);
    }, 1000);

    if (time <= 0) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [futureDate, time]);

  return (
    <Container>
      <span>{name}</span>
      <div className="timer">
        <div className="time">
          <span>Day</span>
          <div>{days}</div>
        </div>
        <div className="time">
          <span>Hour</span>
          <div>{hours}</div>
        </div>
        <div className="time">
          <span>Minutes</span>
          <div>{minutes}</div>
        </div>
        <div className="time">
          <span>Seconds</span>
          <div>{seconds}</div>
        </div>

        <button type="button" onClick={onClick}>
          Delete
        </button>
      </div>
      <div className="futureDate">{new Date(futureDate).toLocaleString()}</div>
    </Container>
  );
};

export default Timer;
