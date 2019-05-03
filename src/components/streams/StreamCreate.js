import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { metaProperty } from "@babel/types";

class StreamCreate extends Component {
  onSubmit() {}

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Enter Title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderInput}
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
