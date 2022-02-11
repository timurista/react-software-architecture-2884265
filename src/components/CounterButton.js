import { useState } from "react";

export const CounterButton = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>
        Num Clicks: {clicks}
      </button>
    </>
  );
};
