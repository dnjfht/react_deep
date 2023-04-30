import One, { Two } from "./MyComponents";
import styled from "styled-components";

const Wrap = styled.div``;

const App = () => {
  return (
    <Wrap>
      <One />
      <Two />
    </Wrap>
  );
};
export default App;
