import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [storedTheme, setStoredTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(storedTheme));
  }, [storedTheme]);

  return [storedTheme, setStoredTheme];
};