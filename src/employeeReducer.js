const initialState = {
  employees: []
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETEMPLOYEES":
      return { ...state, employees: action.payload };
    case "CLEAREMPLOYEES":
      return { ...state, employees: [] };
    default:
      return { ...state };
  }
};
