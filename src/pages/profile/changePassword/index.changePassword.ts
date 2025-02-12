import template from './changePassword.tpl';
import { Block } from '@/utils/block';
import Button from '@/components/button/index.button';
import ProfileInput from '@/components/profileInput/index.profileinput';
import { getFormData } from '@utils/helpers';
import { withStore } from '@utils/store';
import { IState } from '@utils/store';
import { UserController } from '@/controllers/userController';
import { IChangePassword } from '@/api/userApi';
import { ProfileAvatar } from '@/components/profileAvatar/index.profileAvatar';  


const InputProps = [{
    name: 'oldPassword',
    placeholder: '_',
    caption: 'Old Password',
    type: 'password',
    rules: ['password-valid'],
},
{
    name: 'newPassword',
    placeholder: '_',
    caption: 'New password',
    type: 'password',
    rules: ['password-valid'],
},
{
    name: 'repeatPassword',
    placeholder: '_',
    caption: 'Repeat password',
    type: 'password',
    rules: ['password-valid'],
},
];

async function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        if (data.newPassword !== data.repeatPassword) {
            alert("The passwords you entered don't match.");
        }
        await UserController.changePassword(data as unknown as IChangePassword);
    } catch (e) {
        console.error(e);
    }
}

class ChangePasswordBlock extends Block {
    constructor(props: any) {
        super({
            classes: 'profile__page',
            ...props,
            children: {
                profileAvatar: new ProfileAvatar({}),
                profileInput: InputProps.map((item) => new ProfileInput(item)),
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
    first_name: state.user?.first_name,
    avatar: state.user?.display_name,
});

export const ChangePasswordPage = withStore(mapStateToProps)(ChangePasswordBlock);
