import { useState } from "react";
import First from "./components/First";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <First />
    </>
  );
}

export default App;
