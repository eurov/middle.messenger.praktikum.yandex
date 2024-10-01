import Handlebars from "handlebars";
import template from './sidebar.hbs?raw';


export const chatListItem = ({ messages, ...rest }) => {
    const lastMessage = messages[messages.length - 1];
    const lastMessageIsYours = lastMessage.senderIsYou;
    const unreadCount = messages.filter((message) => message.unread).length;

    const compiled = Handlebars.compile(template)({
        time: lastMessage.time,
        lastMessageIsYours,
        lastMessage: lastMessage.text,
        unreadCount,
        ...rest
    })
    return compiled;
}
