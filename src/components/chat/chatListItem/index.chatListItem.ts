import template from './chatListItem.tpl';
import { Block } from '@/utils/block';
import { withStore, IState } from '@/utils/store';
import { ElementProps } from '@utils/block';
import { ChatController } from '@controllers/chatsController';


const getChatId = (element: EventTarget | null): string | null => {
    if (!element) return null;
    const chatId = (element as HTMLElement).getAttribute('data-chat');
    return chatId || getChatId((element as HTMLElement).parentElement);
};

class ChatItem extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            classes: 'chat__chats-list',
            events: {
                click: (e: Event) => {
                    const chatId = getChatId(e.target);
                    if (chatId) ChatController.selectCurrentChat(chatId);
                },
            },
        }, 'ul');
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    return {
        chatsList: state.chats,
    };
};

export const ChatItemWithStore = withStore(mapStateToProps)(ChatItem);
