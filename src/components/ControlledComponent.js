import { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>ControlledComponent</h1>
      <input type="text" onChange={handleChange} value={name} />
    </div>
  );
};

export default ControlledComponent;
