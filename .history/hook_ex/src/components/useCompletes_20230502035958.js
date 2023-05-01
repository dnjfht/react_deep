// Custom Hook
// 함수의 이름이 use로 시작해야 함.
// component의 최상위에서만 호출할 수 있음.
// react 함수에서만 호출할 수 있음.
// 반드시 return을 해줘야 함.

import { useState } from "react";

export const useCompletes = () => {
  // ref 값 가져온 걸로, state를 바꿔주자!

  const [text, setText] = useState(initial);
};
