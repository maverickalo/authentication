import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type} className="form-control" />
  </div>
);

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" component={renderInput} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <Field name="password" component={renderInput} type="password" />
        </div>
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default connect(null, actions)(
  reduxForm({
    form: 'signin',
  })(Signin)
);
