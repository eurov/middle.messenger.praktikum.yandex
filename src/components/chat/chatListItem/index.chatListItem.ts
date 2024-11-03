import template from './chatListItem.tpl';
import { Block } from '@/utils/block';



export default class ChatListItem extends Block {
    constructor(props, tagName: string = 'li') {
        const { uuid = null } = props;
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
