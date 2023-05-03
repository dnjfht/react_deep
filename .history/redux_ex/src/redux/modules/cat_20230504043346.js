// action value
const CHANGE_NAME = "cat/CHANGE_NAME";

// action creator
export const changeName = (payload) => {
  return {
    type: CHANGE_NAME,
    payload: payload,
  };
};

// initialState
export default const initialState = {
  name: "펄이 고양이",
  age: 5,
};

// reducer
const cat = (state = initialState, action) => {};
