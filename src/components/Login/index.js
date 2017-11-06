
import React, { Component } from 'react';
import './style.css';
import Request from '../../helpers/request';
import Auth from '../../helpers/auth';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  login(e) {
    e.preventDefault();
    Request.POST('/user/login', {
      email: this.state.email,
      password: this.state.password
    }).then(function (response) {
      console.log('res', response);
      Auth.jwt = response.data;
      Request.setJWT();
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
            <h1>Ingresar</h1><br></br>
            <form onSubmit={this.login}>
              <input type="email" name="email" id="email" placeholder="Correo" value={this.state.email} onChange={this.handleChange} required/>
              <input type="password" name="password" id="password" placeholder="Clave" value={this.state.password} onChange={this.handleChange} required/>
              <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
              <div>
                <Link to="/sign-up">Registrarse</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;