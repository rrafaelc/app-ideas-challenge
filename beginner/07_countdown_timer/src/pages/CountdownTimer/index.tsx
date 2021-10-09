import React, { useEffect, useRef, useState } from 'react';
import { FiVolumeX, FiVolume2 } from 'react-icons/fi';
import CountdownTimerService from '../../services/CountdownTimerService';
import Timer from '../../components/Timer';

import { Container, Create } from './styles';

interface DateProps {
  id: string;
  name: string;
  date: string;
}

const countdownTimer = new CountdownTimerService();

const audio = new Audio('/assets/Music_Box.mp3');

const CountdownTimer: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [dates, setDates] = useState<DateProps[]>(() => {
    const date = countdownTimer.get();
    if (date.length > 0) {
      return date;
    } else {
      return [];
    }
  });
  const [enableSound, setEnableSound] = useState(false);
  const [error, setError] = useState(false);
  const [errorAnimation, setErrorAnimation] = useState(false);

  const validateDate = (d: string): boolean => {
    const date = Math.round(new Date(d).getTime() / 1000); // In seconds
    const currentDate = Math.round(new Date().getTime() / 1000); // In seconds

    const difference = date - currentDate;

    if (difference >= 60) {
      setError(false);
      return true;
    }

    setError(true);
    return false;
  };

  const handleCreateDate = () => {
    if (dateRef.current && nameRef.current) {
      const name = nameRef.current.value;
      const date = dateRef.current.value;

      if (validateDate(date)) {
        const dateCreated = countdownTimer.create({
          name,
          date,
        });

        setDates([...dates, dateCreated]);
        return;
      }

      setErrorAnimation(true);
      setTimeout(() => setErrorAnimation(false), 1000);
      console.log('The date needs to be at least one minute ahead');
    }
  };

  const handleDelete = (id: string) => {
    try {
      countdownTimer.delete(id);

      const updated = dates.filter((date) => date.id !== id);
      setDates(updated);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    enableSound && audio.play();
  }, [enableSound]);

  return (
    <Container>
      <div className="timers">
        {dates.map((date) => (
          <Timer
            key={date.id}
            name={date.name}
            date={date.date}
            enabledSound={enableSound}
            onClick={() => handleDelete(date.id)}
          />
        ))}
      </div>

      {error && (
        <div className="messageError">
          The date needs to be at least one minute ahead
        </div>
      )}

      <Create className={errorAnimation ? 'errorAnimation' : ''}>
        <label htmlFor="countdown_name" hidden>
          Name
        </label>
        <button
          onClick={() => setEnableSound(!enableSound)}
          className={`sound ${enableSound ? 'active' : ''}`}
        >
          {enableSound ? (
            <FiVolume2 color="#fff" size={24} />
          ) : (
            <FiVolumeX color="#fff" size={24} />
          )}
        </button>
        <input
          name="countdown_name"
          placeholder="Name Optional"
          ref={nameRef}
        />
        <input
          className={error ? 'error' : ''}
          id="datetime"
          type="datetime-local"
          ref={dateRef}
        />
        <button className="start" onClick={handleCreateDate}>
          Start
        </button>
      </Create>
    </Container>
  );
};

export default CountdownTimer;
