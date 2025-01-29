import { router } from '@/utils/router';
import { AuthController } from '@controllers/authController';

import LoginPage from '@/pages/auth/login/index.login';
import SignupPage from '@/pages/auth/signup/index.signup';
import ChatsPage from '@/pages/chats/index.chats';
import ProfilePage from '@/pages/profile/index.profile';
import NotFoundPage from './pages/errors/404/404.js';


export enum Routes {
  Index = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Chats = '/messenger',
  Profile = '/profile',
  ChangePassword = '/change-password',
  ChangeData = '/settings',
  NotFound = '/404',
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, LoginPage)
    .use(Routes.Login, LoginPage)
    .use(Routes.SignUp, SignupPage)
    .use(Routes.Chats, ChatsPage)
    .use(Routes.Profile, ProfilePage)
    // .use(Routes.ChangePassword, ChangePassword)
    // .use(Routes.ChangeData, ChangeData)
    .use(Routes.NotFound, NotFoundPage)
    .start()

  let isProtected = true;
  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Login:
    case Routes.SignUp:
      isProtected = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    if (!isProtected) {
      router.go(Routes.Chats);
    }
  } catch (_) {
    if (isProtected) {
      router.go(Routes.Login);
    }
  }
});





// class App {
//   private page: HTMLElement;

//   url: string;

//   constructor(baseElement: HTMLElement) {
//     this.page = baseElement;
//     this.url = window.location.pathname;
//   }

//   preventReboot() {
//     const pageLinks = this.page.getElementsByTagName('a');
//     for (const link of pageLinks) {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const nextPage = (e.target as Element).getAttribute('href');
//         if (nextPage) {
//           this.url = nextPage;
//           this.render();
//         }
//       });
//     }
//   }

//   public render() {
//     this.page.innerHTML = '';
//     switch (this.url) {
//       case '/':
//       case '/login':
//         this.page.append(new LoginPage().element);
//         break;
//       case '/signup':
//         this.page.append(new SignupPage().element);
//         break;
//       case '/profile':
//         this.page.append(new ProfilePage({ edit: false }).element);
//         break;
//       case '/profile/edit':
//         this.page.append(new ProfilePage({ edit: true }).element);
//         break;
//       case '/chats':
//         this.page.append(new ChatsPage().element);
//         break;
//       default:
//           this.page.append(new NotFoundPage().element);
//     }
//     this.preventReboot();
//   }
// }

// export let app: App;

// document.addEventListener('DOMContentLoaded', () => {
//   const baseElement = document.getElementById('app');
//   if (baseElement) {
//     app = new App(baseElement);
//     app.render();
//   }
// });

