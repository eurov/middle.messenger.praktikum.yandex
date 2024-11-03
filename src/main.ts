import LoginPage from './pages/auth/login/index.login';
import SignupPage from './pages/auth/signup/index.signup';
import ProfilePage from './pages/profile/index.profile';
import ChatsPage from './pages/chats/index.chats';
import NotFoundPage from './pages/errors/404/404.js';



class App {
  private page: HTMLElement;

  url: string;

  constructor(baseElement: HTMLElement) {
    this.page = baseElement;
    this.url = window.location.pathname;
  }

  preventReboot() {
    const pageLinks = this.page.getElementsByTagName('a');
    for (const link of pageLinks) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const nextPage = (e.target as Element).getAttribute('href');
        if (nextPage) {
          this.url = nextPage;
          this.render();
        }
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

export let app: App;

document.addEventListener('DOMContentLoaded', () => {
  const baseElement = document.getElementById('app');
  if (baseElement) {
    app = new App(baseElement);
    app.render();
  }
});

