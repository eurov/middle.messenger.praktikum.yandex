import template from './deleteUser.tpl';
import { Block, ElementProps } from '@/utils/block';
import { withStore, IState } from '@/utils/store';
import { ChatController } from '@/controllers/chatsController';
import Button from '@components/button/index.button';
import Input from '@components/input/index.input';
import { ModalController } from '@/controllers/modalController';


const getUserId = (element: EventTarget | null): string | null => {
    if (!element) return null;
    const userId = (element as HTMLElement).getAttribute('data-user-id');
    return userId || getUserId((element as HTMLElement).parentElement);
};

class DeleteUser extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            style: 'create-chat',
            children: {
                input: new Input({
                    name: 'search',
                    placeholder: 'Search by login',
                    required: true,
                }),
                buttonSearch: new Button({
                    text: 'Search',
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
                click: async (e: Event) => {
                    try {
                        const userId = getUserId(e.target);
                        if (userId) {
                            await ChatController.deleteUserToChat(this.props.selectedChat, +userId);
                        }
                    } catch (error) {
                        console.error(error);
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
        users: state.users,
        selectedChat: state.currentChat,
        userId: state.user?.id,
    }
);

export default withStore(mapStateToProps)(DeleteUser);
