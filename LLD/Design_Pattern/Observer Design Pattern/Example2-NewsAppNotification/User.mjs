export default class User {
  constructor(name) {
    this.name = name;
  }

  notify(category, article) {
    console.log(`${this.name} notified of new ${category} article: ${article}`);
  }
}
