import { useState } from "react";

export default function useLocalState(key, initialValue) {
  console.log("key: ", key)
  console.log("initialVal: ", initialValue)

  const storedValue = localStorage.getItem(key) || initialValue 
  
  console.log("stored val: ", storedValue)
  console.log("tst: ",  localStorage.getItem(key))
  
  // try {
  //   const result = JSON.parse(storedValue)
  // }
  // catch(err) {
  //   console.error(err)
  // }
  const [state, setState] = useState(JSON.parse(storedValue));
  
  const updateState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateState];
}
