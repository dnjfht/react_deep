import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    // XMLHTTPRequest 객체 생성하기

    xhr.open("GET", "http://localhost:5001/sleep_times");
  }, []);
  return <div></div>;
}

export default App;
