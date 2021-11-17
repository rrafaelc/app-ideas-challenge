import { ClockContainer } from "./styles";

export const Clock = () => {
  return (
    <ClockContainer>
      <div id="countdown-number">05:12</div>
      <svg className="c1" viewBox="0 0 40 40" xmlns="http//www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" />
      </svg>
      <svg className="c2" viewBox="0 0 40 40" xmlns="http//www.w3.org/2000/svg">
        <circle r="18" cx="20" cy="20" />
      </svg>
    </ClockContainer>
  );
};
