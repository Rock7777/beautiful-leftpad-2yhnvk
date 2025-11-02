import { useState } from "react";
import usePrevious from "./usePrevious";

const Component1 = () => {
  const [text, setText] = useState("");
  const prevStateValue = usePrevious(text);
  return (
    <div>
      <h1>Component1</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h2>
        Value-{text} and PreviousValue - {prevStateValue}{" "}
      </h2>
    </div>
  );
};

export default Component1;
