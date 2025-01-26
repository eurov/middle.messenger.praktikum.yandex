import template from './signup.tpl';
import { Block } from '@utils/block';
import Input from '@/components/input/index.input';
import Button from '@/components/button/index.button';
// import { validateSignin } from '@/utils/helpers';
import { getFormData } from '@/utils/getFormData';
import { AuthController } from '@controllers/authController'


const inputProps = [
    {
        name: 'email',
        placeholder: 'Email',
        rules: ['email-valid'],
        required: true,
    },
    {
        name: 'login',
        placeholder: 'Login',
        rules: ['login-valid'],
        required: true,
    },
    {
        name: 'first_name',
        placeholder: 'First name',
        rules: ['name-valid'],
        required: true,
    },
    {
        name: 'second_name',
        placeholder: 'Second name',
        rules: ['name-valid'],
        required: true,
    },
    {
        name: 'phone',
        placeholder: 'Phone',
        rules: ['phone-valid'],
        required: true,
    },
    {
        name: 'password',
        placeholder: 'Password',
        rules: ['password-valid'],
        required: true,
    },
    {
        name: 'password',
        placeholder: 'Repeat password',
        rules: ['password-valid'],
        required: true,
    },
];
const button = [new Button({
    text: 'Create account',
    classes: ['button', 'primary'],
})];

function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        AuthController.signup(data);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

export default class SignupPage extends Block {
    constructor() {
        super({
            classes: ['container', 'centered'],
            events: {
                submit: onSubmit,
                // submit: validateSignin,
            },
            children: {
                input: inputProps.map((props) => new Input({ ...props })),
                button,
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
