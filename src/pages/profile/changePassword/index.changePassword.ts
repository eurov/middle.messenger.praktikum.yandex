import template from './changePassword.tpl'
import { Block } from '@/utils/block';
import Button from '@/components/button/index.button';
import ProfileInput from '@/components/profileInput/index.profileinput';
import { getFormData } from '@utils/helpers';
import { withStore } from '@utils/store';
import { IState } from '@utils/store';
import { UserController } from '@/controllers/userController';
import { Routes } from '@/main';
import { router } from '@/utils/router';
import { IChangePassword } from '@/api/userApi';

const type = 'password';
const InputProps = [{
    name: 'oldPassword',
    required: true,
    placeholder: 'Old Password',
    type,
    rules: ['password-valid'],
},
{
    name: 'newPassword',
    required: true,
    placeholder: 'New password',
    type,
    label: 'Новый пароль',
    rules: ['password-valid'],
},
{
    name: 'newPassword',
    required: true,
    placeholder: 'Repeat new password',
    type,
    label: 'Повторите новый пароль',
    rules: ['password-valid'],
},
];

function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        UserController.changePassword(data as unknown as IChangePassword);
        router.go(Routes.Profile);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

class ChangePasswordBlock extends Block {
    constructor(props: any) {
        super({
            classes: 'profile__page',
            ...props,
            children: {
                profileInput: InputProps.map((item) => new ProfileInput(item)),
                button: new Button({
                    text: 'Save',
                    classes: ['profile__save-button', 'button', 'primary']
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
    first_name: state.user?.first_name,
    avatar: state.user?.display_name,
});

export const ChangePasswordPage = withStore(mapStateToProps)(ChangePasswordBlock);
