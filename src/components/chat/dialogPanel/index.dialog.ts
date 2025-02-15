import template from './dialog.tpl';
import { Block } from '@utils/block';
import  MessagesController from '@/controllers/messageController';
import { ModalController } from '@/controllers/modalController';
import { ChatController } from '@/controllers/chatsController';
import MessageCard from '@components/chat/messageCard/index.messageCard';
import ModalItem from '@/components/modal/index.modalItem';
import Avatar from '@/components/avatar/index.avatar';
import { getFormData } from '@/utils/helpers';
import { withStore, IState, ModalTypes } from '@/utils/store';


class ChatMessagesBlock extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: 'chat__main-screen',
            children: {
                addUser: new ModalItem({
                    text: 'Add user',
                    classes: ['modal-item'],
                    events: {
                        click: () => {
                            ModalController.open(ModalTypes.ADD_USER);
                        },
                    },
                }),
                deleteUser: new ModalItem({
                    text: 'Delete user',
                    classes: ['modal-item'],
                    events: {
                        click: async () => {
                            if (this.props.selectedChat) {
                                await ChatController.getUsers(this.props.selectedChat);
                                ModalController.open(ModalTypes.DELETE_USER);
                            }
                        },
                    },
                }),
                messageCards: new MessageCard({}),
                avatar: new Avatar({
                    events: {
                        change: async (event: Event) => {
                            const fileTarget = (event.target as HTMLInputElement).files![0];
                            if (this.props.selectedChat) {
                                await ChatController
                                    .uploadChatAvatar(fileTarget, +this.props.selectedChat);
                            }
                        },
                    },
                }),
            },
            events: {
                submit: (e: SubmitEvent) => {
                    const { message } = getFormData(e);
                    const inputValue = (e.target as Element).querySelector('input');
                    if (inputValue) inputValue.value = '';
                    if (this.props.selectedChat) {
                        MessagesController.sendMessage(this.props.selectedChat, message);
                    }
                },
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    return {
        url: state.chats.find((chat) => chat.id === state.currentChat)?.avatar,
        chat: state.chats.find((chat) => chat.id === state.currentChat),
        selectedChat: state.currentChat,
        userId: state.user?.id,
    };
};

export default withStore(mapStateToProps)(ChatMessagesBlock);
