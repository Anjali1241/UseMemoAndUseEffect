import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return "helloworld";
  }, []);
  const data2 = useEffect(() => {
    "helloworld";
  }, []);
  console.log(data, data2);
  return (
    <>
      <p>UseMemo and UseEffect</p>
    </>
  );
}

export default App;
