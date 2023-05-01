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

export function Two({logger}) {
  return (
  <div>
    <button onClick={}>콘솔 남기기</button>
  </div>
  );
}
