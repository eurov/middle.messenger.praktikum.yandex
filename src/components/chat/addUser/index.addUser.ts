import template from './addUser.tpl';
import { Block } from '@utils/block';
import Button from '@components/button/index.button';
import Input from '@components/input/index.input';
import { UserController } from '@/controllers/userController';
import { ChatController } from '@/controllers/chatsController';
import { withStore, IState } from '@/utils/store';
import { getFormData } from '@utils/helpers';
import { ModalController } from '@/controllers/modalController';

async function onClick(event: SubmitEvent) {
    try {
        const { login } = getFormData(event);
        UserController.searchUserByLogin(login);
    } catch (e) {
        console.error(e)
    }
}

const getUserId = (element: EventTarget | null): string | null => {
    if (!element) return null;
    const userId = (element as HTMLElement).getAttribute('data-user-id');
    console.log(userId)
    return userId || getUserId((element as HTMLElement).parentElement);
};

class AddUser extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: 'create-chat',
            children: {
                input: new Input({
                    name: 'search',
                    placeholder: 'Search by login',
                    required: true,
                }),
                buttonSearch: new Button({
                    text: 'Search',
                    classes: ['button', 'primary']
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
                click: async (e: Event) => {
                    try {
                        const userId = getUserId(e.target);
                        if (userId && this.props.selectedChat) {
                            ChatController.addUserToChat(this.props.selectedChat, +userId);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                },
                submit: onClick,
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
