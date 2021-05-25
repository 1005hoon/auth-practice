import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";

const SignUp = (props) => {
  const { handleSubmit, signUp } = props;

  const onSubmit = (formData) => {
    signUp(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field name="password" type="password" component="input" />
      </fieldset>
      <button>Sign Up</button>
    </form>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: "signup" })
)(SignUp);
