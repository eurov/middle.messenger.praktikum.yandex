import template from './chatListItem.tpl';
import { Block } from '@/utils/block';


interface IChatListItem {
    uuid: string,
    name: string,
    massages?: ({
        senderIsYou: boolean;
        time: string;
        text: string;
        unread?: boolean;
    })
}
export default class ChatListItem extends Block<IChatListItem> {
    constructor(props: IChatListItem, tagName: string = 'li') {
        const { uuid } = props;
        super({
            ...props,
            classes: 'chat-list-item',
            attributes: { 'id': uuid },
        }, tagName);
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
