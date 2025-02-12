import template from './profile.tpl';
import { Block } from '@/utils/block';
import Link from '@/components/link/index.link';
import { Routes } from '@/main';
import { router } from '@utils/router';
import { AuthController } from '@/controllers/authController';
import { IState, withStore } from '@/utils/store';
import { ProfileAvatar } from '@/components/profileAvatar/index.profileAvatar'  
import { UserController } from '@/controllers/userController';



async function onClickChangeData() {
    try {
        router.go(Routes.ChangeData);
    } catch (e) {
        console.error(e);
    }
}

async function onClickChangePassword() {
    try {
        router.go(Routes.ChangePassword);
    } catch (e) {
        console.error(e);
    }
}

const onClickExit = async () => await AuthController.logout();


class ProfileBlock extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: 'profile__page',
            children: {
                profileAvatar: new ProfileAvatar({
                    uploadInput: true,
                    events: {
                        change: async (event: any) => {
                            const fileTarget = (event.target as HTMLInputElement).files![0];
                            UserController.changeUserAvatar(fileTarget);
                        },
                    },
                }),
                changeDataButton: new Link({
                    text: 'Edit',
                    classes: ['profile__field'],
                    events: {
                        click: onClickChangeData,
                    },
                }),
                changePasswordButton: new Link({
                    text: 'Change password',
                    classes: ['profile__field'],
                    events: {
                        click: onClickChangePassword,
                    },
                }),
                logoutButton: new Link({
                    text: 'Log out',
                    classes: ['profile__field'],
                    events: {
                        click: onClickExit
                    },
                }),
            },
        });
    }
    
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
    login: state.user?.login,
    first_name: state.user?.first_name,
    second_name: state.user?.second_name,
    phone: state.user?.phone,
    email: state.user?.email,
    display_name: state.user?.display_name,
    avatar: state.user?.avatar,
});

export const ProfilePage = withStore(mapStateToProps)(ProfileBlock);
