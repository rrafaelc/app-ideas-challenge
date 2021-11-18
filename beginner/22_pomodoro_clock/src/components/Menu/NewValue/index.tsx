import { FormEvent, useEffect, useRef } from "react";
import { NewValueContainer } from "./styles";

type NewValueProps = {
  close: () => void;
  setTimer: (time: number) => void;
};

export const NewValue = ({ close, setTimer }: NewValueProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (ref.current) {
      const time = parseInt(ref.current.value);

      if (time) {
        setTimer(time);
        close();
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <NewValueContainer>
      <form>
        <label htmlFor="value">Enter the new value</label>
        <input
          ref={ref}
          aria-label="Enter the new value"
          type="number"
          min="1"
          id="value"
          placeholder="5"
        />
        <div>
          <button type="button" onClick={close}>
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </NewValueContainer>
  );
};
