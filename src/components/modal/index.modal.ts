import template from './modal.tpl';
import { withStore, IState } from '@utils/store';
import { Block, ElementProps } from '@utils/block';
import Button from '@components/button/index.button';
import { ModalController } from '@controllers/modalController';
import { CreateChat } from '@components/createChat/index.createChat';
import AddUser from '@/components/chat/addUser/index.addUser';
import DeleteUser from '@components/chat/deleteUser/index.deleteUser';


class ModalBlock extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            children: {
                createChat: new CreateChat({}),
                addUser: new AddUser({}),
                deleteUser: new DeleteUser({}),

                
                closeButton: new Button({
                    text: 'Cancel',
                    events: {
                        click: () => {
                            ModalController.close();
                        },
                    },
                }),
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    return {
        modalType: state.modal,
    };
};

export const Modal = withStore(mapStateToProps)(ModalBlock);
