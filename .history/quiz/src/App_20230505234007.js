import { useEffect } from "react";
import axios from "axios";

function App() {
  const callSomethingAxios = () => {
    axios.get("http://localhost:5001/ping").then((response) => {
      console.log(response);

      const data = response.data.answer;
      return data;
    });
  };

  useEffect(() => {
    callSomethingAxios();
  }, []);

  return <div></div>;
}

export default App;
