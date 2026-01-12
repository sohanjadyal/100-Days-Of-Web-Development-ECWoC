import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <Home theme={theme} setTheme={setTheme} />;
}
