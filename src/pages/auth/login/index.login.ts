import template from './login.tpl';
import { Block } from '@utils/block';
import Input from '@/components/input/index.input';
import Button from '@/components/button/index.button';
import { AuthController } from '@/controllers/authController';
import { getFormData } from '@utils/helpers';
import { ISigninData } from '@api/authApi'



const input = [new Input({
    name: 'login',
    placeholder: 'Login',
    rules: ['login-valid'],
    required: true,
}), new Input({
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    rules: ['password-valid'],
    required: true,  
})];

const button = [new Button({
    text: 'Sign in',
    classes: ['button', 'primary'],
})];


async function onSubmit(event: SubmitEvent) {
    await AuthController.signin(getFormData(event) as ISigninData);
}


export default class LoginPage extends Block {
    constructor() {
        super({
            classes: ['container', 'centered'],
            children: {
                input,
                button,
            },
            events: {
                submit: onSubmit
            },
        });
    }

    override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
