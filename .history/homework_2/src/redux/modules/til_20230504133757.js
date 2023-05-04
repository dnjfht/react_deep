// action value
const ADD_TIL = "til/ADD_TIL";

// action creator
export const addTil = (payload) => {
  return { type: ADD_TIL, payload: payload };
};

// initialState
const initialState = [
  { subject: "React", content: "Redux-toolkit 복습했다!", time: "02:00" },
];

// reducer
