import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    // XMLHTTPRequest 객체 생성하기

    // 0

    xhr.open("GET", "http://localhost:5001/sleep-times");
    // 요청 만들기

    // 1

    xhr.send();
    // 2
    // 3

    // 요청 보내기

    // 서버 응답 받기
    // XMLHttpRequest.readyState 프로퍼티가 변경이 될 때마다 콜백함수를 호출해줌.
    // readyState : XMLHttpRequest의 상태를 반환해줌.
    /**
     * 0 :
     * 1 :
     * 2 :
     * 3 :
     */

    xhr.onreadystatechange = function () {};
  }, []);
  return <div></div>;
}

export default App;
