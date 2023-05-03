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

  let a = new Promise((resolve, reject) => {
    resolve({ status: true });
  });

  console.log(a);
  // Promise {<fulfilled>: {status:true}}

  a = new Promise((resolve, reject) => {
    reject("실패했어 ㅜㅜ");
  });

  console.log(a);
  // Uncaught (in promise) 실패했어 ㅜㅜ
  // Promise {<rejected>: "실패했어 ㅜㅜ"}
  // error가 뜨게 됨.

  const promise1 = () => {
    let a = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve("나 여깄어!");
      }, 3000);
    });
    return a;
  };

  promise1();

  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
