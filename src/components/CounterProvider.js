import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  // const [incrementNum, setIncrementNum] = useState(1);
  const increment = (incrementNum) => setClicks(clicks + incrementNum);
  return (
    <CounterContext.Provider value={{ clicks, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
