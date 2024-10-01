import './components/index.partials.js'
import { loginPage } from './pages/auth/login/index.login.js';
import { signupPage } from './pages/auth/signup/index.signup.js';
import { profilePage } from './pages/profile/index.profile.js';
import { chatsPage } from './pages/chats/index.chats.js';
import { dialogsDispatcher } from './pages/chats/index.chats.js';
import { notFoundPage } from './pages/errors/404/404.js';


class App {
    constructor() {
        this.page = document.getElementById('app');
        this.url = window.location.pathname;
    }
    preventReboot(){
        const pageLinks = this.page.getElementsByTagName("a")
        for (const link of pageLinks) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.url = e.target.attributes.href.textContent
                this.render()
            })
        }
    }
    render() {
        switch (this.url) {
            case '/':
            case '/login':
                this.page.innerHTML = loginPage();
                break
            case '/signup':
                this.page.innerHTML = signupPage();
                break
            case '/profile':
                this.page.innerHTML = profilePage();
                break
            case '/profile/edit':
                this.page.innerHTML = profilePage({edit: true});
                break
            case '/chats':
                this.page.innerHTML = chatsPage();
                document.querySelectorAll('.chat-list-item').forEach((el) => {
                    el.addEventListener('click', dialogsDispatcher);
                });
                break
            default:
                this.page.innerHTML = notFoundPage();
        }
        this.preventReboot();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App()
    app.render()
});

