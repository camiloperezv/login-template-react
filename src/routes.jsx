import React from 'react'
import Login from './components/Login/login';
import NotFound from './components/NotFound/not-found'
import SignUp from './components/SignUp/sign-up';
import Home from './components/Home/home';
import SignOut from './components/SignOut/sign-out';
import Auth from './helpers/auth';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/sign-up" exact component={SignUp} />
      <SignOut path="/sign-out" exact component={SignOut}/>
      <PrivateRoute path="/home" exact component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

export default Routes

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/'
        }} />
      )
  )} />
)
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !Auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/home'
        }} />
      )
  )} />
)

