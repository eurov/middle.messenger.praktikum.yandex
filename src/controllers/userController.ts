import { Routes } from '../main';
import { router } from '../utils/router';
import { store } from '../utils/store';
import userApi, { IChangePassword } from '../api/userApi';
import { IUser } from '../api/authApi';

export class UserController {
    static async changeUserProfile(data: IUser) {
        try {
            const user = await userApi.changeUserProfile(data);
            store.set('user', user);
            router.go(Routes.Profile);
        } catch (e) {
            console.error(e);
        }
    }

    static async changeUserAvatar(avatar: File) {
        try {
            const formData = new FormData();
            formData.append('avatar', avatar);
            const user = await userApi.changeUserAvatar(formData);
            store.set('user', user);
        } catch (e) {
            console.error(e);
        }
    }

    static async changePassword(data: IChangePassword) {
        try {
            await userApi.changePassword(data);
            router.go(Routes.Profile);
        } catch (e) {
            console.error(e);
        }
    }

    static async getUser(id: number): Promise<IUser | undefined> {
        try {
            return await userApi.getUser(id);
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }

    static async searchUserByLogin(login: string): Promise<IUser | undefined> {
        try {
            const users = await userApi.searchUserByLogin(login);
            store.set('findUsers', users);
            return users;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }
}
