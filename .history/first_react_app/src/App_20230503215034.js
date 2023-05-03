import One, { Two } from "./MyComponents";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;

  text-align: center;
`;

const App = () => {
  // console.log("");
  // window.alert("쨘");
  // console.log("3");

  // window.setTimeout(() => {
  //   window.alert("쨘!");
  // }, 1000);

  // console.log(111111111);
  // 111111111이 먼저 console에 뜨고 그 다음 "쨘!"이 창에 뜸.

  // let a = new Promise((resolve, reject) => {
  //   resolve({ status: true });
  // });

  // console.log(a);
  // Promise {<fulfilled>: {status:true}}

  // let b = new Promise((resolve, reject) => {
  //   reject("실패했어 ㅜㅜ");
  // });

  // console.log(b);
  // Uncaught (in promise) 실패했어 ㅜㅜ
  // Promise {<rejected>: "실패했어 ㅜㅜ"}
  // error가 뜨게 됨.

  const promise1 = () => {
    let c = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve("나 여깄어!");
      }, 3000);
    });
    return c;
  };

  // promise1();
  // Promise {<pending>}

  promise1()
    .then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      console.log(error);
    });

  // 나 여깄어!
  // .then의 첫 번째 인자는 성공시 실행
  // .then의 두 번째 인자는 실패시 실행

  // .catch 역시 실패시 error를 처리할 때 사용.
  // .then의 두 번째 안자와 .catch는 같은 역할을 함.

  const d = async () => {
    return 1111111;
  };

  console.log(d());
  // Promise {<fulfilled>: 1111111}
  // Promise를 반환함

  const e = async () => {
    let f = await d();
    console.log(f);
  };

  console.log(e());
  // Promise {<pending>}
  //  1111111

  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
