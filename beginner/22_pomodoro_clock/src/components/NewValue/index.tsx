import { FormEvent } from "react";
import { NewValueContainer } from "./styles";

type NewValueProps = {
  close: () => void;
};

export const NewValue = ({ close }: NewValueProps) => {
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    close();
  };

  return (
    <NewValueContainer>
      <form>
        <label htmlFor="value">Enter the new value</label>
        <input
          aria-label="Enter the new value"
          type="number"
          min="0"
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
