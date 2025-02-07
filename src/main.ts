import { router } from '@/utils/router';
import { AuthController } from '@controllers/authController';
import '@components/partials.js'
import LoginPage from '@/pages/auth/login/index.login';
import SignupPage from '@/pages/auth/signup/index.signup';
import ChatsPage from '@/pages/chats/index.chats';
import { ProfilePage } from '@/pages/profile/card/index.profile.js';
import { ChangeDataPage } from '@/pages/profile/changeData/index.changeData.js';
import { ChangePasswordPage } from '@/pages/profile/changePassword/index.changePassword.js';
import NotFoundPage from './pages/errors/404/404.js';


export enum Routes {
  Index = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Chats = '/messenger',
  Profile = '/profile',
  ChangeData = '/profile/edit',
  ChangePassword = '/profile/password_edit',
  NotFound = '/404',
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, LoginPage)
    .use(Routes.Login, LoginPage)
    .use(Routes.SignUp, SignupPage)
    .use(Routes.Chats, ChatsPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.ChangeData, ChangeDataPage)
    .use(Routes.ChangePassword, ChangePasswordPage)
    .use(Routes.NotFound, NotFoundPage)

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
    router.start();
    if (!isProtected) {
      router.go(Routes.Chats);
    }
  } catch (_) {
    router.start();
    if (isProtected) {
      router.go(Routes.Index);
    }
  }
});
