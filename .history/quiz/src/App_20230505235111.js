import { useEffect } from "react";
import axios from "axios";

function App() {
  const callSomethingFetch = () => {};

  const callSomethingAxios = () => {
    axios.get("http://localhost:5001/ping").then((response) => {
      console.log(response);
      return response;
    });
  };

  return (
    <div>
      <button onClick={callSomethingFetch}>fetch로 요청하기</button>
      <button onClick={callSomethingAxios}>axios로 요청하기</button>
    </div>
  );
}

export default App;
