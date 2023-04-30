import One, { Two } from "./MyComponents";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;

  text-align: center;
`;

const App = () => {
  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
