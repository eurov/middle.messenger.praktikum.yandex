import template from './createChat.tpl';
import { ChatController } from '@controllers/chatsController';
import { ModalController } from '@/controllers/modalController';
import Button from '@components/button/index.button';
import Input from '@components/input/index.input';
import { getFormData } from '@utils/helpers';
import { Block, ElementProps } from '@utils/block';


async function onClick(event: SubmitEvent) {
    try {
        const { title } = getFormData(event);
        await ChatController.create(title);
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
                input: new Input({
                    name: 'title',
                    placeholder: 'Enter title',
                    value: '',
                    type: 'text',
                    required: true,
                }),
                createButton: new Button({
                    classes: ['button', 'primary'],
                    text: 'Create',
                }),
                closeButton: new Button({
                    text: 'Cancel',
                    classes: ['button', 'secondary'],
                    events: {
                        click: () => {
                            ModalController.close();
                        },
                    },
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
