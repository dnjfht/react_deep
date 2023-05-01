// Custom Hook
// 함수의 이름이 use로 시작해야 함.
// component의 최상위에서만 호출할 수 있음.
// react 함수에서만 호출할 수 있음.
// 반드시 return을 해줘야 함.

import { useState } from "react";

export const useCompletes = (initial = "") => {
  // ref 값 가져온 걸로, state를 바꿔주자!

  const [text, setText] = useState(initial);

  const changeText = (_ref) => {
    // const value = _ref.current?.value;
    // 옵셔널 체이닝 (?.)
    // value가 있으면 가져오고 없으면 error message 출력.

    const value = _ref.current ? _ref.current.value : "";

    if (value) {
      setText(value);
      _ref.current.value = "";
    }
  };

  return [text, changeText];
  // 이제 useCompletes라는 hook을 호출하게 되면
  // text라는 state 값과 changeText라는 state 값을 변경하기 위한 함수를 받아가게 됨.
};
