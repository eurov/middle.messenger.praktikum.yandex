import template from './sidebar.tpl';
import { Block } from '@/utils/block';
import ChatItem from '@/components/chat/chatListItem/index.chatListItem';
import Link from '@/components/link/index.link';
import { ModalController } from '@controllers/modalController';
import { ModalTypes } from '@/utils/store';
import { Modal } from '@/components/modal/index.modal';
import Button from '@/components/button/index.button';


const onClick = () => {
    ModalController.open(ModalTypes.CREATE_CHAT);
};


export default class SideBarPanel extends Block {
    constructor(props: any) {
        super({
            classes: 'chat__chats-sidebar',
            children: {
                newChatButton: new Button({
                    text: 'New chat',
                    classes: ['button', 'secondary'],
                    events: {
                        click: onClick,
                    },
                }),
                profileLink: new Link({
                    text: 'Profile',
                    href: '/profile',
                    classes: ['button', 'secondary'],
                }),
                chatItems: new ChatItem({ ...props }),
                modal: new Modal({}),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
