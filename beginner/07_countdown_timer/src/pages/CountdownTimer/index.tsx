import React, { useRef, useState } from 'react';

import CountdownTimerService from '../../services/CountdownTimerService';

import Timer from '../../components/Timer';

import { Container } from './styles';

interface DateProps {
  id: string;
  name: string;
  date: string;
}

const countdownTimer = new CountdownTimerService();

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

  const validateDate = (d: string): boolean => {
    const date = Math.round(new Date(d).getTime() / 1000); // In seconds
    const currentDate = Math.round(new Date().getTime() / 1000); // In seconds

    const difference = date - currentDate;

    if (difference >= 60) {
      return true;
    }

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

  return (
    <Container>
      <div className="timers">
        {dates.map((date) => (
          <Timer
            key={date.id}
            name={date.name}
            date={date.date}
            onClick={() => handleDelete(date.id)}
          />
        ))}
      </div>
      <div>
        <label htmlFor="countdown_name">Name</label>
        <input name="countdown_name" ref={nameRef} />
        <input type="datetime-local" ref={dateRef} />
        <button onClick={handleCreateDate}>Create</button>
      </div>
    </Container>
  );
};

export default CountdownTimer;
