import { useEffect, useState } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  debugger;
  const saved = localStorage.getItem(key);
  const initial = saved!=='undefined'?JSON?.parse(saved):null;
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};