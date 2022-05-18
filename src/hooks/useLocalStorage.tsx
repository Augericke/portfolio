import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  // Check local storage to determine initial value
  const initState = (key: string) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };

  // Render initially on client
  useEffect(() => setStoredValue(initState(key)), []);

  // Wrap useState set function to persist in localStorage
  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
