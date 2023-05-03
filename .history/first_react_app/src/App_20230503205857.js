import One, { Two } from "./MyComponents";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;

  text-align: center;
`;

const App = () => {
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
