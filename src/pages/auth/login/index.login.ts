// import template from './login.hbs?raw'
import template from './login.tpl';
import { Block } from '@utils/block';
import Input from '@/components/formInput/index.input';
import Button from '@/components/button/index.button';
import { getFormData } from '@/utils/formData';



const input = [new Input({
    type: 'text',
    name: 'login',
    placeholder: 'Username',
    rules: ['login-valid'],
}), new Input({
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    rules: ['password-valid'],
})];

const button = [new Button({
    text: 'Sign in',
    class: 'button primary',
    href: '/chats',

}), new Button({
    text: 'Create account',
    class: 'button link',
    href: '/signup',
})];


export default class LoginPage extends Block {
    constructor() {
        super({
            style: ['container', 'centered'],
            children: {
                input,
                button,
            },
            events: {
                submit: getFormData,
            },
        });
    }

    override render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
