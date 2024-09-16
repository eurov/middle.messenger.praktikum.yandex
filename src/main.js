import './components/index.partials.js'
import { loginPage } from './pages/auth/login/index.login.js';
import { signupPage } from './pages/auth/signup/index.signup.js';
import { profilePage } from './pages/profile/index.profile.js';
import { chatsPage } from './pages/chats/index.chats.js';
import { dialogsDispatcher } from './pages/chats/index.chats.js';
import { notFoundPage } from './pages/errors/404/404.js';


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
            app.innerHTML = chatsPage();
            document.querySelectorAll('.chat-list-item').forEach((el) => {
                el.addEventListener('click', dialogsDispatcher);
            });
            break
        default:
            app.innerHTML = notFoundPage();
    }
});

