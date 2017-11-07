import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Request from '../../helpers/request';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      country: '',
      department: '',
      city: '',
      mobile: '',
      phone: '',
      password: '',
      rol: '',
      organization: ''
    }

    this.signUpUser = this.signUpUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  signUpUser(e) {
    e.preventDefault();
    Request.post('/user/sign-up', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log('res', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="modal-dialog">
          <div className="espacioPading"></div>
          <div className="loginmodal-container">
            <form onSubmit={this.signUpUser}>
              <h1>Registro</h1><br></br>
              <input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
              <input type="email" name="email" id="email" placeholder="Correo" value={this.state.email} onChange={this.handleChange} />
              <input type="password" name="pass" id="password" placeholder="Clave" value={this.state.password} onChange={this.handleChange} />
              <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
            </form>
            <div>
              <Link to="/">Ingresar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;