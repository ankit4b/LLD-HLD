export default class Navbar {
  update(isLoggedIn) {
    if (isLoggedIn) {
      console.log("Navbar: display USER specific nav links");
    } else {
      console.log("Navbar: display GUEST nav links");
    }
  }
}
