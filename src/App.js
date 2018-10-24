import React, { Component } from "react";
import { connect } from "react-redux";
import { action } from "./action";

class App extends Component {
  render() {
    console.log("props", this.props);
    const userList = this.props.userList.users
      ? this.props.userList.users.map((user, index) => {
          return <li key={index}>{user.first_name}</li>;
        })
      : undefined;
    const employeeList = this.props.employeeList.employees
      ? this.props.employeeList.employees.map((emp, index) => (
          <li key={index}>{emp.first_name}</li>
        ))
      : undefined;
    return (
      <div className="App">
        <button onClick={this.props.fetchUsers}>Get Users</button>
        <button onClick={this.props.clearUsers}>Clear List</button>
        <ul>{userList}</ul>
        <button onClick={this.props.getEmployees}>Get Employees</button>
        <button onClick={this.props.clearEmployees}>Clear Emp List</button>
        <ul>{employeeList}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.userList,
    employeeList: state.employeeList
  };
};

export default connect(
  mapStateToProps,
  { ...action }
)(App);
