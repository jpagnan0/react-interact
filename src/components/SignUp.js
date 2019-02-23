import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";
import validate from "../util/validate";
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
const SignUp = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={"name"} component={renderTextField} label={"Full Name"} />
      </div>
      <div>
        <Field
          name={"username"}
          component={renderTextField}
          label={"Username"}
        />
      </div>
      <div>
        <Field name={"email"} component={renderTextField} label={"Email"} />
      </div>
      <div>
        <Field
          name={"password"}
          type={"password"}
          component={renderTextField}
          label={"Password"}
        />
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: "SignUp", // a unique identifier for this form
  validate,
})(SignUp);
