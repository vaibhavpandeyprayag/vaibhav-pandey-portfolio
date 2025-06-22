import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { WindowWidthContext } from "./exports";
import Navbar from "./components/Navbar";

function App() {
  const [winInnerWidth, setWinInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinInnerWidth(() => window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <WindowWidthContext.Provider value={winInnerWidth}>
      <Navbar />
      <HomePage />
    </WindowWidthContext.Provider>
  );
}

export default App;
