import template from './sidebar.tpl'
import { Block } from '@/utils/block'
import ChatItem from '@/components/chat/chatListItem/index.chatListItem'
import { testChatsData } from '@/temp/fixtures'

// const chatList = [{
//     chatName: 'Андрей',
//     time: '10:49',
//     message: 'Привет!',
// }, {
//     chatName: 'Андрей',
//     time: '10:49',
//     message: 'Привет!',
// }];

// export const dialogsDispatcher = (e) => {
//     const selectedChat = e.target.closest('.chat-list-item');
//     document.querySelectorAll('.chat-list-item').forEach((item) => {
//         if (item === selectedChat) {
//             const activeChatUuid = item.dataset.chatUuid;
//             const activeChat = testChatsData.find((chat) => chat.uuid === activeChatUuid);
//             if (activeChat) {
//                 document.querySelector('.chat__main-screen').innerHTML = chatDialog({ chat: activeChat });
//                 const dialog = document.querySelector('.chat-dialog__messages');
//                 dialog.scrollTo(0, dialog.scrollHeight);
//             }
//             item.classList.add('active');
//         } else {
//             item.classList.remove('active');
//         }
//     })
// };


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



// import Handlebars from "handlebars";
// import template from './sidebar.hbs?raw';


// export const chatListItem = ({ messages, ...rest }) => {
//     const lastMessage = messages[messages.length - 1];
//     const lastMessageIsYours = lastMessage.senderIsYou;
//     const unreadCount = messages.filter((message) => message.unread).length;

//     const compiled = Handlebars.compile(template)({
//         time: lastMessage.time,
//         lastMessageIsYours,
//         lastMessage: lastMessage.text,
//         unreadCount,
//         ...rest
//     })
//     return compiled;
// }
