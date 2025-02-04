import template from './changeData.tpl';
import { Block } from '@/utils/block';
import Button from '@/components/button/index.button';
import ProfileInput from '@/components/profileInput/index.profileinput';
import { getFormData } from '@utils/helpers';
import { IState, withStore } from '@/utils/store';
import { UserController } from '@/controllers/userController';
import { Routes } from '@/main';
import { router } from '@utils/router';
import { IUser } from '@/api/authApi';


function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        UserController.changeUserProfile(data as unknown as IUser);
        router.go(Routes.Profile);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
        console.error(e)
    }
}

class ChangeDataBlock extends Block {
    constructor(props: any) {
        const inputProps = [
            {
                name: 'first_name',
                caption: 'First name',
                value: props.user.first_name,
                rules: ['name-valid'],
            },
            {
                name: 'second_name',
                caption: 'Enter second name',
                value: props.user.second_name,
                rules: ['name-valid'],
            },
            {
                name: 'login',
                caption: 'Login',
                value: props.user.login,
                rules: ['login-valid'],
            },
            {
                name: 'email',
                caption: 'Email',
                value: props.user.email,
                rules: ['email-valid'],
            },
            {
                name: 'display_name',
                caption: 'Chat name',   
                value: props.user.display_name,
            },
            {
                name: 'phone',
                caption: 'Phone',
                value: props.user.phone,
                rules: ['phone-valid'],
            },
        ];
        super({
            ...props,
            classes: 'profile__page',
            children: {
                profileInput: inputProps.map((item) => new ProfileInput(item)),
                button: new Button({
                    text: 'Save',
                    classes: ['profile__save-button', 'button', 'primary'],
                }),
            },
            events: {
                submit: onSubmit,
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
    user: {
        login: state.user?.login,
        first_name: state.user?.first_name,
        second_name: state.user?.second_name,
        phone: state.user?.phone,
        email: state.user?.email,
        display_name: state.user?.display_name,
    },
});

export const ChangeDataPage = withStore(mapStateToProps)(ChangeDataBlock);
