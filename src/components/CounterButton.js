import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

// context to share state

export const CounterButton = () => {
  const { clicks, increment } = useContext(CounterContext);
  // const [clicks, setClicks] = useState(0);
  const [incrementNum, setIncrementNum] = useState(1);
  return (
    <>
      <p>
        <label>
          Increment By: {incrementNum}
          <input
            value={incrementNum}
            onChange={(e) => setIncrementNum(parseInt(e.target.value))}
            type="number"
          />
        </label>
      </p>
      <button onClick={() => increment(incrementNum)}>
        Num Clicks: {clicks}
      </button>
    </>
  );
};
