import { useEffect } from "react";
import axios from "axios";

function App() {
  const callSomethingAxios = () => {
    axios.get("http://localhost:5001/ping").then((response) => {
      return response;
    });
  };

  return (
    <div>
      <button onClick={callSomethingAxios}>axios로 요청하기</button>
    </div>
  );
}

export default App;
