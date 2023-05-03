import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cat",
  initialState: {
    name: "펄이 고양이",
    age: 5,
  },
  reducers: {
    // reducer 안에 action creator 함수가 여기 들어감.
    changeName: (state, action) => {
      state.name = action.payload;
      // toolkit은 immer라고 부르는 불변성 유지 패키지를 이미 가지고 있음.
      // immer가 불변성 유지를 알아서 해주기 때문에 새객체를 만들거나 하지 않아도 됨.
      // immer는 프록시를 사용해서 불변성 유지
      // 프록시 => 순회, 열거 등을 하는 등 이런 기본적인 동작의 새로운 행동을 만들어낼 때 사용
    },
  },
});

export const { changeName } = catSlice.actions;
export default catSlice.reducer;
