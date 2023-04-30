import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TilContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: darkviolet;
`;

const Title = styled.h1``;

const TilInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: coral;
`;

function App() {
  return (
    <Wrap>
      <TilContent>
        <Title></Title>
      </TilContent>

      <TilInputWrap></TilInputWrap>
    </Wrap>
  );
}

export default App;
