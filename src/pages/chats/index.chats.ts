import template from './ctats.tpl';
import { testChatsData } from '@/temp/fixtures.js';
import { Block } from '@/utils/block';

import DialogPanel from '@/components/chat/dialogPanel/index.dialog';
import SideBarPanel from '@/components/chat/sidebar/index.sidebar';


export default class ChatsPage extends Block {
    constructor() {
        super({
            classes: 'chat__container',
            children: {
                sideBarPanel: new SideBarPanel(),
                dialogPanel: new DialogPanel(),
            },
            events: {
                click: (event: any) => {
                    document.querySelectorAll('.chat-list-item').forEach(
                        (item) => item.classList.remove('active'),
                    );
                    const targetItem = event.target.closest('.chat-list-item');
                    if (targetItem) {
                        targetItem.classList.add('active');
                        testChatsData.forEach((testItem) => {
                            if (testItem.uuid == targetItem.id) {
                                this.children.dialogPanel.setProps({
                                    name: testItem.name,
                                    messages: testItem.messages,
                                });

                            }
                        });
                    }
                }, 
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
