import template from './ctats.tpl';
import { Block } from '../../utils/block';

import DialogPanel from '../../components/chat/dialogPanel/index.dialog';
import SideBarPanel from '../../components/chat/sidebar/index.sidebar';
import { ChatController } from '../../controllers/chatsController';


export default class ChatsPage extends Block {
    constructor() {
        super({
            classes: 'chat__container',
            children: {
                sideBarPanel: new SideBarPanel({}),
                dialogPanel: new DialogPanel({}),
            },
        });
    }

    async componentDidMount(_oldProps?: Record<string, any> | undefined): Promise<void> {
        await ChatController.getChats();
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
