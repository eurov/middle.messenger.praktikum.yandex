import template from './dialog.tpl';
import { Block } from '@utils/block';
// import ChatInput from '../ChatInput';
// import ChatItem from '../ChatItem';
// import { type IChatItem } from '../ChatItem/chatItem.props';


export default class DialogPanel extends Block {
    constructor(props) {
        console.log('#######################')
        console.log(props)
        console.log('#######################')
        super({
            ...props,
            classes: 'chat__main-screen',
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}



// import Handlebars from "handlebars";
// import template from './dialog.hbs?raw';


// export const chatDialog = (item) => {
//     const compiled = Handlebars.compile(template)
//     return compiled({ activeChat: item.chat });
// }

