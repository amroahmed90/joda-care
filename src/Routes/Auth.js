class Auth {
  constructor() {
    this.isAuthenticated = false;
  }
  logIn(cb) {
    this.isAuthenticated = true;
    cb();
  }

  logOut(cb) {
    this.isAuthenticated = false;
    cb();
  }

  getAuthentication() {
    return this.isAuthenticated;
  }
}

export default new Auth();
