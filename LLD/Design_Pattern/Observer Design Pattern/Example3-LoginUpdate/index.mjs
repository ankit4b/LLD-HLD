import AuthService from "./AuthService.mjs";
import Navbar from "./Navbar.mjs";
import Profile from "./Profile.mjs";
import Content from "./Content.mjs";

// Initiate AuthService (Subject)
const authService = new AuthService();

// Initiate UI components (Observers)
const navbar = new Navbar();
const profile = new Profile();
const content = new Content();

// Add Observers to the AuthService Subject
authService.subscribe(navbar);
authService.subscribe(profile);
authService.subscribe(content);

// Simulate user Login
console.log("--- LOGIN --->");
authService.login();

// Simulate user Logout
console.log("--- LOGOUT --->");
authService.logout();

/*
--- LOGIN --->
User logged in

Navbar: display USER specific nav links
Profile: display USER's profile
Content: display USER specific content

--- LOGOUT --->
user logged out

Navbar: display GUEST nav links
Profile: display login button
Content: display GUEST content
*/
