// action value
const CHANGE_NAME = "cat/CHANGE_NAME";

// action creator
const changeName = (payload) => {
  return {
    type: CHANGE_NAME,
    payload: payload,
  };
};
// initialState
const initialState = {
  name: "펄이 고양이",
  age: 5,
};

// reducer
