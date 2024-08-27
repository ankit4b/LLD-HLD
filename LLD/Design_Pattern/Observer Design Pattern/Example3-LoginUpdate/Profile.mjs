export default class Profile {
  update(isLoggedIn) {
    if (isLoggedIn) {
      console.log("Profile: display USER's profile");
    } else {
      console.log("Profile: display login button");
    }
  }
}
