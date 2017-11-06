import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Login from '../Login';
import NotFound from '../NotFound'
import SignUp from '../SignUp';
import Home from '../Home';
import SignOut from '../SignOut';
import Auth from '../../helpers/auth';
const App = () => (
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
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login'
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
export default App