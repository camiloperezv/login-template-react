import React from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../../helpers/auth';
const SignOut = () => {
  Auth.signout();
  return (
    <Redirect to="/" />
  )
}

export default SignOut