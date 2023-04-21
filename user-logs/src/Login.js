import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;
 
    this.setState({[name]: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', this.state)
      .then(res => {
        //this is where we will do our authentication magic 
        if (res.data.isValid === true) {
          //if the user is valid go to home page/dashboard
          window.location = '/dashboard';
        } else {
          //display error message
          console.log('Username / password incorrect');
        }
      })
      .catch(err => console.log(err));
  }

  showPassword = (e) => {
    e.preventDefault();
    let pwdInput = document.getElementById('password');
    if (pwdInput.type === "password") {
      pwdInput.type = "text";
    } else {
      pwdInput.type = "password";
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input 
            type="password"
            placeholder="Password"
            id="password" 
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.showPassword}>
          &#x1F441;
          </button>
          <Link to="/forgot">Forgot Password?</Link>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default Login;