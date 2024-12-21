import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: string | boolean) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      // Return the stored value if it exists, otherwise return the initial value
      return storedValue !== null
        ? typeof initialValue === "boolean"
          ? storedValue === "true"
          : storedValue
        : initialValue;
    }
    return initialValue;
  });

  const setLocalStorageValue = (newValue: string | boolean) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, newValue.toString());
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== "undefined") {
        const newValue = localStorage.getItem(key);
        // Update state based on the new value from localStorage
        setValue(
          newValue !== null
            ? typeof initialValue === "boolean"
              ? newValue === "true"
              : newValue
            : initialValue,
        );
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorageChange);
      }
    };
  }, [key, initialValue]);

  return [value, setLocalStorageValue] as const;
};

export default useLocalStorage;
