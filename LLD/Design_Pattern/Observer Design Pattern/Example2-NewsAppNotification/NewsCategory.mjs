export default class NewsCategory {
  constructor(category) {
    this.category = category;
    this.subscriber = [];
  }

  subscribe(user) {
    this.subscriber.push(user);
  }

  unsubscribe(user) {
    this.subscriber = this.subscriber.filter((sub) => sub !== user);
  }

  publish(article) {
    console.log(`New article in ${this.category} : ${article}`);
    this.subscriber.forEach((user) => user.notify(this.category, article));
  }
}
