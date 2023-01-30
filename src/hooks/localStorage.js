import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
  // getting stored value
  const item = localStorage.getItem(key);
  const parsedItem = JSON.parse(item);
  return parsedItem || defaultValue;
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