import { useState } from "react";

const Component2 = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  if (count === 3) {
    throw new Error("Count value reached three!App crashed!");
  }
  return (
    <div>
      <button onClick={handleIncrement}>Count - {count} </button>
    </div>
  );
};

export default Component2;
