import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface TimerProps {
  name: string;
  date: string;
  enabledSound: boolean;
  onClick: () => void;
}

const audio = new Audio('/assets/Music_Box.mp3');

const Timer: React.FC<TimerProps> = ({ name, date, enabledSound, onClick }) => {
  const [time, setTime] = useState(1);
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

    if (time >= 2 && time <= 2000) {
      if (new Date(time).getSeconds() <= 1) {
        if (time >= 0) {
          if (enabledSound) {
            audio.play();
          }
        }
      }
    }

    if (time <= 0) {
      setSeconds('00');
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [futureDate, time, enabledSound]);

  return (
    <Container>
      <p className="name">{name}</p>
      <div className="timer">
        <div className="time">
          <span>Days</span>
          <div>{days}</div>
        </div>
        <div className="time">
          <span>Hours</span>
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
      </div>
      <div className="goal">{new Date(futureDate).toLocaleString()}</div>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </Container>
  );
};

export default Timer;
