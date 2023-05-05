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

  // promise 값을 보고 싶을 때 async...await
  const callSomething = async () => {
    let data = {
      day: "일",
      "sleep-time": "10:00",
    };
    // post 요청 보내기
    const responsePost = await fetch("http://localhost:5001/sleep-times", {
      // fetch에 들어가는 option은 객체로 만들어주면 됨.
      method: "POST",
      // 요청하고 응답할 때 어떤 데이터로 왔다갔다 할지
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      // json으로 보내줄 거라고 명시를 해뒀기 때문에 JSON.stringify(data);
      // JSON.stringify() => JavaScript 값이나 객체를 JSON 문자열로 변환
      body: JSON.stringify(data),
    });

    // get 요청 보내기
    // const responseGet = await fetch("http://localhost:5001/sleep-times");
    // console.log(responseGet);
    // Promise {<pending>}
    // console.log(responsePost);
    // Promise {<pending>}
  };

  useEffect(() => {
    callSomething();
    // get 요청 :
    // Response {type: 'cors', url: 'http://localhost:5001/sleep-times', redirected: false, status: 200, ok: true, …}

    // post 요청 :
    // Response {type: 'cors', url: 'http://localhost:5001/sleep-times', redirected: false, status: 201, ok: true, …}
  }, []);

  return <div></div>;
}

export default App;
