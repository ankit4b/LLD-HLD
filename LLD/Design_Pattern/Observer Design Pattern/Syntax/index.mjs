import Subject from "./Subject.mjs";
import Observer from "./Observer.mjs";

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notifyObserver("New data available");

console.log("------>");

subject.unsubscribe(observer1);
subject.notifyObserver("New data available");

/* OUTPUT : 
Observer 1 received data : New data available
Observer 2 received data : New data available
------>
Observer 2 received data : New data available
*/
