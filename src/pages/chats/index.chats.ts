import template from './ctats.tpl';
import { testChatsData } from '../../temp/fixtures.js'
import { Block } from '@/utils/block';

import DialogPanel from '@/components/chat/dialogPanel/index.dialog';
import SideBarPanel from '@/components/chat/sidebar/index.sidebar';


export default class ChatsPage extends Block {
    constructor() {
        super({
            classes: 'chat__container',
            children: {
                sideBarPanel: new SideBarPanel(),
                dialogPanel: new DialogPanel({ name: 'Test' }),
            },
            events: {
                click: (event: any) => {
                    document.querySelectorAll('.chat-list-item').forEach(
                        (item) => item.classList.remove('active')
                    )
                    const targetItem = event.target.closest('.chat-list-item');
                    if (targetItem){
                        targetItem.classList.add('active')
                        this.children.dialogPanel.setProps({
                            name: "Another name"
                        });
                    } else {
                    }
                }, 
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
