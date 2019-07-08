import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Signup </h1>
        <p>
          Fill in this lovely form to create your account and sell us your soul
        </p>
        <hr />
        <form onSubmit={this.props.createUser}>
          <label htmlFor="user_name">
            <b>Username: </b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="user_name"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="email">
            <b>Email Address: </b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="name">
            <b>Name: </b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="dob">
            <b>Date of Birth: </b>
          </label>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            name="dob"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="height_cm">
            <b>Height: </b>
          </label>
          <input
            type="number"
            placeholder="Enter your height in cm"
            name="height_cm"
            onChange={this.props.changeUser}
          />
          <br />
          <label htmlFor="gender">
            <b>Gender: </b>
          </label>
          <select
            defaultValue="male"
            name="gender"
            onChange={this.props.changeUser}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>{" "}
          <b>Required to calculate your base metabolic rate</b>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
