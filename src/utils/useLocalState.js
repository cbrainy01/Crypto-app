import { useState } from "react";

export default function useLocalState(key, initialValue) {
  const storedValue = localStorage.getItem(key) || JSON.stringify(initialValue);
  console.log("stored val: ", storedValue);

  const [state, setState] = useState(JSON.parse(storedValue));

  const updateState = (value) => {
    console.log("value: ", value);
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateState];
}
