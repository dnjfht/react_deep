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
    },
  },
});
