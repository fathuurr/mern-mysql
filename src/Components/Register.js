import React, { Component } from 'react';
import { register } from './UserFunctions';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(user).then((res) => {
      if (res) {
        this.props.history.push('/login');
      }
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-6 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>
              <div class='form-group'>
                <label htmlFor='email'> First Name </label>
                <input
                  type='text'
                  name='first_name'
                  className='form-control'
                  placeholder='First Name'
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div class='form-group'>
                <label htmlFor='email'> Last Name </label>
                <input
                  type='text'
                  name='last_name'
                  className='form-control'
                  placeholder='Last Name'
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div class='form-group'>
                <label htmlFor='email'> Email </label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='Enter Email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div class='form-group'>
                <label htmlFor='email'> Password </label>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='Enter Password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <button
                  type='submit'
                  className='btn btn-lg btn-primary btn-block mt-5'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
