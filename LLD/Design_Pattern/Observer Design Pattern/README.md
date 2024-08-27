# Observer Pattern

- With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

- Use observables to notify subscribers when an event occurs

### With the observer pattern, we have:

1. An observable object, which can be observed by subscribers in order to notify them.
2. Subscribers, which can subscribe to and get notified by the observable object.

### An observable object usually contains 3 important parts:

1. observers: an array of observers that will get notified whenever a specific event occurs
2. subscribe(): a method in order to add observers to the observers list
3. unsubscribe(): a method in order to remove observers from the observers list
4. notify(): a method to notify all observers whenever a specific event occurs
