import { useEffect, useMemo } from "react";

import "./App.css";

function App() {
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
