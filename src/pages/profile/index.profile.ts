import template from './profile.tpl';
import { Block } from '@/utils/block';
import { testProfileData } from '@/temp/fixtures';
import Button from '@/components/button/index.button';
import ProfileInput from '@/components/profileInput/index.profileinput';
import Link from '@/components/link/index.link';
import { validateInput } from '@/utils/helpers';
import { validateProfile } from '@/utils/helpers';


const inputProps = [
    {
        name: 'first_name',
        placeholder: 'Enter name',
        rules: ['name-valid'],
    },
    {
        name: 'second_name',
        placeholder: 'Second name',
        rules: ['name-valid'],
    },
    {
        name: 'login',
        placeholder: 'Login',
        rules: ['login-valid'],
    },
    {
        name: 'display_name',
        placeholder: 'Chat name',
        rules: ['login-valid'],
    },
    {
        name: 'email',
        placeholder: 'Email',
        rules: ['email-valid'],
    },
    {
        name: 'phone',
        placeholder: 'Phone',
        rules: ['phone-valid'],
    },

];

const profileData = Object.entries((testProfileData)).map(([name, props]) => ({ name, props }));
const button = [new Button({
    text: 'Save',
    classes: ['profile__save-button', 'button', 'primary'],
})];
const link = [new Link({
    text: 'Edit',
    href: '/profile/edit',
    classes: ['profile__field'],
}), new Link({
    text: 'Change password',
    href: '#',
    classes: ['profile__field'],
}), new Link({
    text: 'Log out',
    href: '/login',
    classes: ['profile__field'],
}),
];

export default class ProfilePage extends Block {
    constructor({ edit = false }) {
        super({
            classes: 'profile__page',
            profileData,
            edit,
            children: {
                button,
                link,
                input: inputProps.map((props) => new ProfileInput({ ...props })),
            },
            events: {
                blur: (event: any) => {
                    const validateResult = validateInput(event.target.value, this.props.rules || []);
                    if (validateResult) {
                        this.setProps({
                            ...this.props,
                            error: validateResult,
                            value: event.target.value,
                        });
                    } else {
                        this.setProps({
                            ...this.props,
                            error: false,
                            value: event.target.value,
                        });
                    }
                },
                
                submit: validateProfile,
                
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
