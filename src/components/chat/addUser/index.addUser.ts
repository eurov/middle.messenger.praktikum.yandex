import template from './addUser.tpl';
import { Block } from '@utils/block';
import Button from '@components/button/index.button';
import Input from '@components/input/index.input';
import { UserController } from '@/controllers/userController';
import { ChatController } from '@/controllers/chatsController';
import { withStore, IState } from '@/utils/store';
import { getFormData } from '@utils/helpers';
import { ModalController } from '@/controllers/modalController';

async function searchByLogin(event: SubmitEvent) {
    try {
        const { login } = getFormData(event);
        await UserController.searchUserByLogin(login);
    } catch (e) {
        console.error(e);
    }
}

async function addUserToChat(event: SubmitEvent, chatId: number) {
    try {
        const { userId } = getFormData(event);
        if (userId && chatId) {
            await ChatController.addUserToChat(chatId, +userId);
            ModalController.close();
        }
    } catch (error) {
        console.error(error);
    }
}

class AddUser extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: 'create-chat',
            children: {
                input: new Input({
                    name: 'login',
                    placeholder: 'Search by login',
                    required: true,
                }),
                buttonSearch: new Button({
                    text: 'Add',
                    classes: ['button', 'primary'],
                }),
                closeButton: new Button({
                    text: 'Cancel',
                    classes: ['button', 'secondary'],
                    events: {
                        click: () => {
                            ModalController.close();
                        },
                    },
                }),
            },
            events: {
                submit: (event: SubmitEvent) => {
                    switch ((event.target as HTMLFormElement).id) {
                        case 'search-form':
                            searchByLogin(event);
                            break;
                        case 'add-user-form':
                            addUserToChat(event, this.props.selectedChat);
                            break;
                        default:
                            break;
                    }
                },
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => (
    {
        users: state.findUsers,
        selectedChat: state.currentChat,
        userId: state.user?.id,
    }
);

export default withStore(mapStateToProps)(AddUser);
