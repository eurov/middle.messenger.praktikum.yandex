import Handlebars from "handlebars";
import templateFunction from './sidebar.hbs?raw';
// import { formatTimeForChat } from '../../utils';



export const chatListItem = ({ messages, ...rest }) => {
    const lastMessage = messages[messages.length - 1];
    const lastMessageIsYours = lastMessage.senderIsYou;
    // const timeString = formatTimeForChat(lastMessage.time);
    const unreadCount = messages.filter((message) => message.unread).length;

    const compiled = Handlebars.compile(templateFunction)({
        time: "11:22",
        // time: timeString,
        lastMessageIsYours,
        lastMessage: lastMessage.text,
        unreadCount,
        ...rest
    })
    
    return compiled;

}
