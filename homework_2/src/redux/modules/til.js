// action value
const ADD_TIL = "til/ADD_TIL";

// action creator
export const addTil = (payload) => {
  return { type: ADD_TIL, payload: payload };
};

// initialState
const initialState = [
  { subject: "React", content: "Redux-toolkit 복습했다!", time: "02:00" },
  { subject: "React", content: "react 심화 3주차 나가기", time: "04:00" },
];

// reducer
export default function til(state = initialState, action) {
  switch (action.case) {
    case ADD_TIL: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
