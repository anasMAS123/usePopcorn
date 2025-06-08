import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, keyName) {
  const [value, setValue] = useState(function () {
    const storedValues = JSON.parse(localStorage.getItem(keyName));
    if (storedValues === null) return initialState;
    return storedValues;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue];
}
