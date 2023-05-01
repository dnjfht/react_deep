import React, { useCallback, useEffect, useState } from "react";

export default function MyComponents() {
  const [someValue, setValue] = useState("hi");
  // 구조 분해 할당
  // 한 방에 값과 바꿔주기 위한 함수를 가져오기 위한 것.
  // state 값을 변경하면 리렌더링이 이뤄짐.

  useEffect(() => {
    console.log("바꿀 거야!");
  }, [someValue]);

  useEffect(() => {
    console.log("나 여기 있어!");

    return () => {
      // 화면에서 사라질 때 실행해줄 것.
    };
  }, []);

  // useCallback - react hook
  // 함수형 컴포넌트가 리렌더링되면 컴포넌트 안에 선언해둔 함수를 다시 한 번 생성하게 됨.
  // useCallBack()은 함수를 메모이제이션해서 여러번 만들지 않게 해줌.

  // useRef()는 어떤 값을 넣어주면 그 값으로 초기화된 변경 가능한 어떤 ref 객체를 반환해줌.
  // useRef가 반환해준 ref 객체는 다른 값이라 변경이 가능함.

  const logger = useCallback(() => {
    console.log("나 메모이제이션 된 함수야!");
  }, []);

  return (
    <div>
      <p>{someValue}</p>
      <button
        onClick={() => {
          setValue("바꿀 거야!");
        }}
      >
        change!
      </button>

      <Two logger={logger} />
    </div>
  );
}

export function Two({ logger }) {
  return (
    <div>
      <button onClick={logger}>콘솔 남기기</button>
    </div>
  );
}
