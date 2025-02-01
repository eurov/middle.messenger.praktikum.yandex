import template from './profile.tpl';
import { Block } from '@/utils/block';
// import { testProfileData } from '@/temp/fixtures';
// import Button from '@/components/button/index.button';
// import ProfileInput from '@/components/profileInput/index.profileinput';
import Link from '@/components/link/index.link';
// import { validateInput } from '@/utils/helpers';
// import { validateProfile } from '@/utils/helpers';

import { Routes } from '@/main';
import { router } from '@utils/router';
import { AuthController } from '@/controllers/authController';
import { withStore } from '@/utils/store';



// const inputProps = [
//     {
//         name: 'first_name',
//         placeholder: 'Enter name',
//         rules: ['name-valid'],
//     },
//     {
//         name: 'second_name',
//         placeholder: 'Second name',
//         rules: ['name-valid'],
//     },
//     {
//         name: 'login',
//         placeholder: 'Login',
//         rules: ['login-valid'],
//     },
//     {
//         name: 'display_name',
//         placeholder: 'Chat name',
//         rules: ['login-valid'],
//     },
//     {
//         name: 'email',
//         placeholder: 'Email',
//         rules: ['email-valid'],
//     },
//     {
//         name: 'phone',
//         placeholder: 'Phone',
//         rules: ['phone-valid'],
//     },

// ];

// const profileData = Object.entries((testProfileData)).map(([name, props]) => ({ name, props }));
// const button = [new Button({
//     text: 'Save',
//     classes: ['profile__save-button', 'button', 'primary'],
// })];


const mapStateToProps = (state: IState) => ({
    login: state.user?.login,
    first_name: state.user?.first_name,
    second_name: state.user?.second_name,
    phone: state.user?.phone,
    email: state.user?.email,
    display_name: state.user?.display_name,
    avatar: state.user?.avatar,
});

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

// const onClickExit = async () => await AuthController.logout();
async function onClickExit() {
    try {
        await AuthController.logout();
    } catch (e) {
        console.error(e);
    }
}


class ProfileBlock extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: 'profile__page',
            children: {
                // input: inputProps.map((props) => new ProfileInput({ ...props })),   
                // ProfileAvatar: new ProfileAvatar({
                //     events: {
                //         change: async (event: any) => {
                //             const fileTarget = (event.target as HTMLInputElement).files![0];
                //             UserController.changeUserAvatar(fileTarget);
                //         },
                //     },
                // }),
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
                    // isExit: true,
                    events: {
                        click: onClickExit
                    },
                }),
            },
            // profileData,
            // children: {
            //     button,
            //     link,
            //     input: inputProps.map((props) => new ProfileInput({ ...props })),
            // },
            // events: {
            //     blur: (event: any) => {
            //         const validateResult = validateInput(event.target.value, this.props.rules || []);
            //         if (validateResult) {
            //             this.setProps({
            //                 ...this.props,
            //                 error: validateResult,
            //                 value: event.target.value,
            //             });
            //         } else {
            //             this.setProps({
            //                 ...this.props,
            //                 error: false,
            //                 value: event.target.value,
            //             });
            //         }
            //     },
                
            //     submit: validateProfile,
                
            // },
        });
    }
    
    render(): DocumentFragment {
        console.log(this.props)
        return this.compile(template, this.props);
    }
}


export const ProfilePage = withStore(mapStateToProps)(ProfileBlock);
