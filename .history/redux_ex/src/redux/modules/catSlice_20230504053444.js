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
    },
  },
});
