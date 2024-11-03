import template from './sidebar.tpl'
import { Block } from '@/utils/block'
import ChatItem from '@/components/chat/chatListItem/index.chatListItem'
import { testChatsData } from '@/temp/fixtures'


export default class SideBarPanel extends Block {
    constructor() {
        super({
            classes: 'chat__chats-sidebar',
            children: {
                chatItems: testChatsData.map((chatProps) => new ChatItem(chatProps)),

            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
