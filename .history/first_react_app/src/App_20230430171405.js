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

  padding: 4rem 8rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 4rem;
`;

const TilInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: coral;
`;

function App() {
  return (
    <Wrap>
      <TilContent>
        <Title>TIL</Title>
      </TilContent>

      <TilInputWrap>
        <label htmlFor="subject">과목</label>
        <input id="subject" type="text" placeholder="subject" />

        <label htmlFor="content">내용</label>
        <input id="content" type="text" placeholder="contents" />

        <label htmlFor="time">공부시간</label>
        <input id="time" type="text" placeholder="study-time" />
      </TilInputWrap>
    </Wrap>
  );
}

export default App;
