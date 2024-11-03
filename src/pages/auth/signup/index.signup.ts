import template from './signup.tpl';
import { Block } from '@utils/block';
import Input from '@/components/input/index.input';
import Button from '@/components/button/index.button';
import { validateSignin } from '@/utils/helpers';


const inputProps = [
    {
        name: 'email',
        placeholder: 'Email',
        rules: ['email-valid'],
        required: true
    },
    {
        name: 'username',
        placeholder: 'Username',
        rules: ['username-valid'],
        required: true
    },
    {
        name: 'first_name',
        placeholder: 'First name',
        rules: ['name-valid'],
        required: true
    },
    {
        name: 'second_name',
        placeholder: 'Second name',
        rules: ['name-valid'],
        required: true
    },
    {
        name: 'phone',
        placeholder: 'Phone',
        rules: ['phone-valid'],
        required: true
    },
    {
        name: 'password',
        placeholder: 'Password',
        rules: ['password-valid'],
        required: true
    },
    {
        name: 'password',
        placeholder: 'Repeat password',
        rules: ['password-valid'],
        required: true
    },
];
const button = [new Button({
    text: 'Create account',
    classes: ['button', 'primary'],
})];

export default class SignupPage extends Block {
    constructor() {
        super({
            classes: ['container', 'centered'],
            events: {
                submit: validateSignin,
            },
            children: {
                input: inputProps.map((props) => new Input({ ...props })),
                button
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
