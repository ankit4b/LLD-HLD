export default class Content {
  update(isLoggedIn) {
    if (isLoggedIn) {
      console.log("Content: display USER specific content");
    } else {
      console.log("Content: display GUEST content");
    }
  }
}
