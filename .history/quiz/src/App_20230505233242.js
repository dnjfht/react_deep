import { useEffect } from "react";

function App() {
  const callSomethingAxios = () => {};

  useEffect(() => {
    callSomethingAxios();
  }, []);

  return <div></div>;
}

export default App;
