const Auth = {
  isAuthenticated: false,
  jwt:undefined,
  signout() {
    this.isAuthenticated = false;
    this.jwt = undefined;
  }
};
export default Auth;