import template from './createChat.tpl';
import { ChatController } from '@controllers/chatsController';
import { ModalController } from '@/controllers/modalController';
import Button from '@components/button/index.button';
import ProfileInput from '@components/profileInput/index.profileinput';
import { getFormData } from '@utils/helpers';
import { Block, ElementProps } from '@utils/block';

async function onClick(event: SubmitEvent) {
    try {
        const { title } = getFormData(event);
        await ChatController.create(title as string);
        ModalController.close();
    } catch (e) {
        console.error(e);
    }
}

export class CreateChat extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            style: 'create-chat',
            children: {
                input: new ProfileInput({
                    name: 'title',
                    required: true,
                    placeholder: 'Ромашковый чат',
                    value: '',
                    type: 'text',
                    label: 'Имя чата',
                    rules: ['not-empty'],
                }),
                button: new Button({
                    text: 'Создать',
                }),
            },
            events: {
                submit: onClick,
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
