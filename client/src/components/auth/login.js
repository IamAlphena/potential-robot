import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
    <>
    <Form.Field >
      <Form.Label>Email</Form.Label>
      <Form.Control>
        <Form.Input
        onChange={this.onChange}
        value={this.state.email}
        error={errors.email}
        id="email"
        type="email"
        />
      </Form.Control>
    </Form.Field>
    <Form.Field>
      <Form.Label>Password</Form.Label>
      <Form.Control>
        <Form.Input
           onChange={this.onChange}
           value={this.state.password}
           error={errors.password}
           id="password"
           type="password"
        />
      </Form.Control>
    </Form.Field>
    <div className="spacer"></div>
    <Button.Group>
      <div className="btn">
      <Button fullwidth rounded color="link" onClick={handleSubmit}>
        Login
      </Button>
      </div>
    </Button.Group>
  </>
);
}
}

export default Login;
