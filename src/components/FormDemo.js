
import { Component } from "react";

export default class FormDemo extends Component {
  state = {
    user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    },    
    errors: {}
  };

  onChangeHandler = (e) => {
    
    const { name, value } = e.target;
    this.setState({
        
      user: {
        ...this.state.user,
        [name]: value,
      }
      
    });
  };
  onHandlerSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${this.state.user.username} signup successfull`);
    this.setState({
        ...this.state,
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    });
  };
  render() {
      const {username,email,password,confirmPassword} = this.state;
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Demo Form
        </h1>

        <form onSubmit={this.onHandlerSubmit}>
          <div className="formControl">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              onChange={this.onChangeHandler}
              value={username}
            />
          </div>
          <div className="formControl">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="text"
              onChange={this.onChangeHandler}
              value={email}
            />
          </div>
          <div className="formControl">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              onChange={this.onChangeHandler}
              value={password}
            />
          </div>
          <div className="formControl">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              onChange={this.onChangeHandler}
              value={confirmPassword}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}
