import React, { Component, useState } from "react";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

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

      componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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
        
    this.props.registerUser(newUser, this.props.history); 
  }; 

    render() {
        const { errors } = this.state;

  return (
    <>
    <h1 className="title"> Sign-Up to save your Favorites </h1>
    <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Control>
          <Form.Input
          onChange={this.onChange}
          value={this.state.name}
          error={errors.name}
          id="name"
          type="text"
          className={classnames("", {
            invalid: errors.name
          })}
          />

        </Form.Control>
        <span className="red-text">{errors.name}</span>
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
           className={classnames("", {
            invalid: errors.email
          })}
          />
        </Form.Control>
        <span className="red-text">{errors.email}</span>
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
             className={classnames("", {
              invalid: errors.password
            })}
          />
        </Form.Control>
        <span className="red-text">{errors.password}</span>
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
            className={classnames("", {
              invalid: errors.password2
            })}
          />
        </Form.Control>
        <span className="red-text">{errors.password2}</span>
      </Form.Field>
      <Button.Group>
        <div className="btn">
        <Button fullwidth rounded color="link" 
        onClick={this.onSubmit}
        >
          Register
        </Button>
        </div>
      </Button.Group>
    </>
  );
}
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
