import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const ref1 = useRef();
  useEffect(() => {
    ref1.current = value;
  }, [value]);
  return ref1.current;
};

export default usePrevious;
