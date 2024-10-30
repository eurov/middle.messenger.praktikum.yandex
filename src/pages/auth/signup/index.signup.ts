import template from './signup.tpl';
import { Block } from '@utils/block';
import Input from '@/components/formInput/index.input';
import Button from '@/components/button/index.button';
import { getFormData } from '@/utils/formData';


const type = 'text';
const input = [
    {
        name: 'email',
        placeholder: 'Email',
        rules: ['email-valid'],
    },
    {
        name: 'username',
        placeholder: 'Username',
        rules: ['username-valid'],
    },
    {
        name: 'first_name',
        placeholder: 'First name',
        rules: ['name-valid'],
    },
    {
        name: 'second_name',
        placeholder: 'Second name',
        rules: ['name-valid'],
    },
    {
        name: 'phone',
        placeholder: 'Phone',
        rules: ['phone-valid'],
    },
    {
        name: 'password',
        placeholder: 'Password',
        rules: ['password-valid'],
    },
    {
        name: 'password',
        placeholder: 'Repeat password',
        rules: ['password-valid'],
    },
];
const button = [new Button({
    text: 'Create account',
    class: 'button primary',
    href: '/chats',

}), new Button({
    text: 'Sign in',
    class: 'button link',
    href: '/login',
})];

export default class SignupPage extends Block {
    constructor() {
        super({
            style: ['container', 'centered'],
            events: {
                submit: getFormData,
            },
            children: {
                input: input.map((field) => new Input({ ...field })),
                button
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
