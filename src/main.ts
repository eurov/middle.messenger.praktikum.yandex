import LoginPage from './pages/auth/login/index.login';
import SignupPage from './pages/auth/signup/index.signup';
import ProfilePage from './pages/profile/index.profile';
import ChatsPage from './pages/chats/index.chats';
import NotFoundPage from './pages/errors/404/404.js';



class App {
  private page: HTMLElement;

  private url: string;

  constructor() {
    this.page = document.getElementById('app');
    this.url = window.location.pathname;
  }

  preventReboot() {
    const pageLinks = this.page.getElementsByTagName('a');
    for (const link of pageLinks) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.url = (e.target as Element).attributes.href.textContent;
        this.render();
      });
    }
  }

  public render() {
    this.page.innerHTML = '';
    switch (this.url) {
      case '/':
      case '/login':
        this.page.append(new LoginPage().element);
        break;
      case '/signup':
        this.page.append(new SignupPage().element);
        break;
      case '/profile':
        this.page.append(new ProfilePage({ edit: false }).element);
        break;
      case '/profile/edit':
        this.page.append(new ProfilePage({ edit: true }).element);
        break;
      case '/chats':
        this.page.append(new ChatsPage().element);
        break;
      default:
          this.page.append(new NotFoundPage().element);
    }
    this.preventReboot();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.render();
});

