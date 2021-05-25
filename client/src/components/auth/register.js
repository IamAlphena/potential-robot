import React, { Component, useState } from "react";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";

class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
          errors: {}
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
    console.log(newUser);
      };
    render() {
        const { errors } = this.state;

  return (
    <>
    <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Control>
          <Form.Input
          onChange={this.onChange}
          value={this.state.name}
          error={errors.name}
          id="name"
          type="text"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
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
      <Form.Field>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control>
          <Form.Input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="password"
          />
        </Form.Control>
      </Form.Field>
      <Button.Group>
        <div className="btn">
        <Button fullwidth rounded color="link" onClick={handleSubmit}>
          Register
        </Button>
        </div>
      </Button.Group>
    </>
  );
}
}

export default Register;
