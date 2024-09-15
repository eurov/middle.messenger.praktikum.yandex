import './components/index.partials.js'
import { loginPage } from './pages/login/index.login.js';
import { signupPage } from './pages/signup/index.signup.js';
import { profilePage } from './pages/profile/index.profile.js';


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById("app");
    const route = window.location.pathname;

    switch (route) {
        case '/':
        case '/login':
            app.innerHTML = loginPage();
            break
        case '/signup':
            app.innerHTML = signupPage();
            break
        case '/profile':
            app.innerHTML = profilePage();
            break
        case '/chats':
            console.log('Hi')
            break
        case '/signup':
            console.log('Hi')
            break
        default:
            console.log('Bye')
    }
});
