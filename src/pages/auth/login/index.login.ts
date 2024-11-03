import template from './login.tpl';
import { Block } from '@utils/block';
import Input from '@/components/input/index.input';
import Button from '@/components/button/index.button';
import { validateSignin } from '@/utils/helpers';



const input = [new Input({
    name: 'login',
    placeholder: 'Username',
    rules: ['login-valid'],
    required: true
}), new Input({
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    rules: ['password-valid'],
    required: true  
})];

const button = [new Button({
    text: 'Sign in',
    classes: ['button', 'primary'],
})];



export default class LoginPage extends Block {
    constructor() {
        super({
            classes: ['container', 'centered'],
            children: {
                input,
                button,
            },
            events: {
                submit: validateSignin,
            },
        });
    }

    override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
