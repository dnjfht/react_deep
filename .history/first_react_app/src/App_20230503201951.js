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

  window.setTimeout(() => {
    window.alert("쨘!");
  }, 1000);

  console.log(111111111);

  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
