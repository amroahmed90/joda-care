class Auth {
  constructor() {
    this.isAuthenticated = false;
  }
  signIn(cb) {
    this.isAuthenticated = true;
    cb();
  }

  signOut(cb) {
    this.isAuthenticated = false;
    cb();
  }

  getAuthentication() {
    return this.isAuthenticated;
  }
}

export default new Auth();
