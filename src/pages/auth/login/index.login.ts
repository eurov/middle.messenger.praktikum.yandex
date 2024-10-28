// import template from './login.hbs?raw'
import template from './login.tpl'
import { Block } from '@utils/block';
import Input from '@components/formInput/input';
import Button from '@/components/button/index.button';
// import { getFormData } from '../../utils/getFormData.ts';


const getFormData = (event: SubmitEvent): Record<string, string> => {
    const formData: Record<string, string> = {};
    event.preventDefault();
    if (event.target == null) return formData;
    const allInput = (event.target as HTMLFormElement).querySelectorAll('input');
    allInput.forEach((input: HTMLInputElement) => {
        formData[input.name] = input.value;
        input.dispatchEvent(new Event('blur'));
    });
    console.info(formData);
    return formData;
};

const input = [new Input({
    type: 'text',
    name: 'login',
    required: true,
    title: 'Логин',
    placeholder: 'Username',
    rules: ['login-valid'],
}), new Input({
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    required: true,
    title: 'Пароль',
    rules: ['password-valid'],
})];

const button = [new Button({
    text: 'Sign in',
    class: 'button primary',
    href: '/chats',

}), new Button({
    text: 'Create account',
    class: 'button link',
    href: '/signUp'
})]


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
