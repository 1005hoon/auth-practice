import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";

import * as actions from "../../actions";

const Signin = (props) => {
  const history = useHistory();
  const { handleSubmit, signIn, errorMessage } = props;

  const onSubmit = (formData) => {
    signIn(formData, () => history.push("/"));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <h1>{errorMessage}</h1>
        <button>Sign Up</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
    errorMessage: state.auth.errorMessage,
  };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" })
)(Signin);
