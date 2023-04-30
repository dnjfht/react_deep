import { useRef, useState } from "react";
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
  width: 80%;
  height: 100%;

  padding: 4rem 8rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 4rem;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 900px;
  background-color: #a6bbe6;

  margin-top: 3rem;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 1rem;

  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(23, 23, 23, 0.8);
    border-radius: 6px;
  }
`;

const Content = styled.div`
  width: calc(100% - 4rem);
  background-color: #e0eaff;

  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.6rem;
`;

const TilInputWrap = styled.div`
  width: 20%;
  height: 100%;

  padding: 3rem 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const PersonalInputWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputName = styled.label`
  margin-right: 1rem;

  font-size: 1.4rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 16rem;
  padding: 1rem;

  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const AddTilButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #e0eaff;

  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: none;

  color: #666;

  outline: none;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    background-color: #b9caea;

    color: white;
  }
`;

const initialState = [
  {
    subject: "React",
    content:
      "오늘은 웹팩과 바벨 가지고 프로젝트를 세팅해봤다! 혼자 하기 끄으읏 -!(사실 난 안했어)",
    time: "05 : 20",
  },
  {
    subject: "React",
    content: "다시 React 심화 과정으로 갈아 엎는 중...",
    time: "01 : 50",
  },
];

function App() {
  const [til, setTil] = useState(initialState);

  const subjectInputRef = useRef(null);
  const contentInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleAddTil = (event) => {
    event.preventDefault();

    const newTilContent = {
      subject: subjectInputRef.current.value,
      content: contentInputRef.current.value,
      time: timeInputRef.current.value,
    };

    setTil((prev) => [...prev, newTilContent]);

    subjectInputRef.current.value = "";
    contentInputRef.current.value = "";
    timeInputRef.current.value = "";
  };

  console.log(til);

  return (
    <Wrap>
      <TilContent>
        <Title>TIL</Title>

        <ContentsWrap>
          {til.map((t, index) => {
            return (
              <Content key={index}>
                <h1>{t.subject}</h1>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 500 }}>
                  {t.content}
                </h3>
                <p
                  style={{ fontSize: "1.5rem", fontWeight: 500, color: "#666" }}
                >
                  {t.time}
                </p>
              </Content>
            );
          })}
        </ContentsWrap>
      </TilContent>

      <TilInputWrap>
        <PersonalInputWrap>
          <InputName htmlFor="subject">과목 : </InputName>
          <Input
            ref={subjectInputRef}
            id="subject"
            type="text"
            placeholder="subject"
          />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="content">내용 : </InputName>
          <Input
            ref={contentInputRef}
            id="content"
            type="text"
            placeholder="contents"
          />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="time">공부시간 : </InputName>
          <Input
            ref={timeInputRef}
            id="time"
            type="text"
            placeholder="study-time"
          />
        </PersonalInputWrap>

        <AddTilButton onClick={handleAddTil}>추가하기</AddTilButton>
      </TilInputWrap>
    </Wrap>
  );
}

export default App;
