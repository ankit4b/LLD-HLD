import User from "./User.mjs";
import NewsCategory from "./NewsCategory.mjs";

// Create news category (Subject)
const sportsNews = new NewsCategory("Sports");
const techNews = new NewsCategory("Technology");

// Create users (Observer)
const user1 = new User("Subrat");
const user2 = new User("Bikash");

// Subscribes user to category
sportsNews.subscribe(user1);
techNews.subscribe(user1);
techNews.subscribe(user2);

// Publish New article
sportsNews.publish("Sports article 1");
techNews.publish("Tech Article 1");

// Unsubscribe user
console.log("---- Unsubscribe user1 from technews------>");
techNews.unsubscribe(user1);
sportsNews.publish("Sports article 2");
techNews.publish("Tech Article 2");

/* OUTPUT:
New article in Sports : Sports article 1
Subrat notified of new Sports article: Sports article 1

New article in Technology : Tech Article 1
Subrat notified of new Technology article: Tech Article 1
Bikash notified of new Technology article: Tech Article 1

---- Unsubscribe user1 from technews------>
New article in Sports : Sports article 2
Subrat notified of new Sports article: Sports article 2

New article in Technology : Tech Article 2
Bikash notified of new Technology article: Tech Article 2
 */
