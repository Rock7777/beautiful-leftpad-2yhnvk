import { useRef } from "react";

const UnControlledComponent = () => {
  const userRef = useRef();
  const handleSubmit = () => {
    alert(`Clicked - ${userRef.current.value}`);
  };
  return (
    <div>
      <h1>UnControlledComponent</h1>
      <input type="text" ref={userRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UnControlledComponent;
