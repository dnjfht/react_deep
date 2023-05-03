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
    resolve("나 성공했어!");
  });

  console.log(a);

  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
