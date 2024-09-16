import Handlebars from "handlebars";
import template from './chats.hbs?raw'; 

import { testChatsData } from '../../temp/fixtures.js'
import { chatListItem } from './sidebarPanel/index.sidebar.js';
import { chatDialog } from './dialogPanel/index.dialog.js';


export const dialogsDispatcher = (e) => {
    const selectedChat = e.target.closest('.chat-list-item');
    document.querySelectorAll('.chat-list-item').forEach((item) => {
        if (item === selectedChat) {
            const activeChatUuid = item.dataset.chatUuid;
            const activeChat = testChatsData.find((chat) => chat.uuid === activeChatUuid);
            if (activeChat) {
                document.querySelector('.chat__main-screen').innerHTML = chatDialog({ chat: activeChat });
                const dialog = document.querySelector('.chat-dialog__messages');
                dialog.scrollTo(0, dialog.scrollHeight);
            }
            item.classList.add('active');
        } else {    
            item.classList.remove('active');
        }
    })
};

export const chatsPage = () => {
    const chats = testChatsData.map((chat) => chatListItem(chat));
    const compiled = Handlebars.compile(template);
    return compiled({chats})
};
