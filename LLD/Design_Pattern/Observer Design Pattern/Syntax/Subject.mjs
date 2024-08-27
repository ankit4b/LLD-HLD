export default class Subject {
  constructor() {
    this.observer = [];
  }

  subscribe(observer) {
    this.observer.push(observer);
  }

  unsubscribe(observer) {
    this.observer = this.observer.filter((obs) => obs !== observer);
  }

  notifyObserver(data) {
    this.observer.forEach((obs) => obs.update(data));
  }
}
