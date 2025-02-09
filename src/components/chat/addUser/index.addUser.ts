import template from './addUser.tpl';
import { Block } from '@utils/block';
import Button from '@components/button/index.button';
import ProfileInput from '@components/profileInput/index.profileinput';
import { UserController } from '@/controllers/userController';
import { ChatController } from '@/controllers/chatsController';
import { withStore, IState } from '@/utils/store';
import { getFormData } from '@utils/helpers';

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
    return userId || getUserId((element as HTMLElement).parentElement);
};

class AddUser extends Block {
    constructor(props: any) {
        super({
            ...props,
            style: 'create-chat',
            children: {
                input: new ProfileInput({
                    name: 'login',
                    placeholder: '',
                    value: '',
                    required: true,
                }),
                button: new Button({
                    text: 'Поиск',
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
