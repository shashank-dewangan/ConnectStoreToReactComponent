import axios from "axios";

export const action = {
  fetchUsers: () => dispatch => {
    dispatch({ type: "APIFETCHING", payload: true });
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response =>
        dispatch({ type: "GETUSERS", payload: response.data.data })
      )
      .catch(err => dispatch({ type: "SETERROR", payload: err }))
      .finally(dispatch({ type: "APIFETCHING", payload: false }));
  },
  clearUsers: () => dispatch => {
    dispatch({ type: "CLEARUSERS" });
  },
  getEmployees: () => dispatch => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(response =>
        dispatch({ type: "GETEMPLOYEES", payload: response.data.data })
      );
  },
  clearEmployees: () => dispatch => {
    dispatch({ type: "CLEAREMPLOYEES" });
  }
};
