const initialState = {
  apifetching: false,
  users: [],
  error: {}
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APIFETCHING":
      return { ...state, apifetching: action.payload };
    case "SETERROR":
      return { ...state, error: action.payload };
    case "CLEARUSERS":
      return { ...state, users: [] };
    case "GETUSERS":
      return { ...state, users: action.payload };
    default:
      return { ...state };
    // case "UDATENAME":
    // return {...state, name : action.payload}
    // case "UPDATEAGE":
    // return {...state, age:action.payload}
  }
};
