import React, { Component } from 'react';
import { login } from './UserFunctions';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
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
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push('/profile');
      }
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-6 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
              <div class='form-group'>
                <label htmlFor='Email'> Email </label>
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
                  onSubmit={this.onSubmit}
                  className='btn btn-lg btn-primary btn-block mt-5'
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
