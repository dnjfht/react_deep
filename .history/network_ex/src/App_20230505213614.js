import { useEffect } from "react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   let xhr = new XMLHttpRequest();
  //   // XMLHTTPRequest 객체 생성하기

  //   // 0

  //   xhr.open("GET", "http://localhost:5001/sleep-times");
  //   // 요청 만들기

  //   // 1

  //   xhr.send();
  //   // 2
  //   // 3 => 요청을 보내고 기다리는 시간

  //   // 4 => 요청이 끝나고 서버한테 응답을 받은 시간

  //   // 요청 보내기

  //   // 서버 응답 받기
  //   // XMLHttpRequest.readyState 프로퍼티가 변경이 될 때마다 콜백함수를 호출해줌.
  //   // readyState : XMLHttpRequest의 상태를 반환해줌.
  //   /**
  //    * 0
  //    * 1
  //    * 2
  //    * 3
  //    * 4
  //    */

  //   xhr.onreadystatechange = function () {
  //     // console.log(xhr.readyState);

  //     if (xhr.readyState === 4) {
  //       console.log(xhr.responseText);
  //       // 서버한테 응답을 받았다면 데이터 가져오기
  //     }
  //   };

  //   // onload : 완벽하게 서버에게서 응답을 받아왔을 때만 사용할 수 있음.
  //   xhr.onload = function () {
  //     console.log(xhr.responseText);
  //   };
  // }, []);

  // fetch()
  useEffect(() => {
    // get 요청 보내기
    const response = fetch("http://localhost:5001/sleep-times");
    console.log(response);
    // Promise {<pending>}
  }, []);

  return <div></div>;
}

export default App;
