export default class AuthService {
  constructor() {
    this.isLoggedIn = false;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.isLoggedIn));
  }

  login() {
    this.isLoggedIn = true;
    console.log("User logged in");
    this.notify();
  }

  logout() {
    this.isLoggedIn = false;
    console.log("user logged out");
    this.notify();
  }
}
