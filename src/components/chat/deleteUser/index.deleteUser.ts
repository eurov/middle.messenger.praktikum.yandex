import template from './deleteUser.tpl';
import { Block, ElementProps } from '../../../utils/block';
import { withStore, IState } from '../../../utils/store';
import { ChatController } from '../../../controllers/chatsController';
import Button from '../../../components/button/index.button';
import Input from '../../../components/input/index.input';
import { ModalController } from '../../../controllers/modalController';



class DeleteUser extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            classes: 'create-chat',
            children: {
                input: new Input({
                    name: 'search',
                    placeholder: 'Search by login',
                    required: true,
                }),
                buttonDelete: new Button({
                    text: 'Delete',
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
                submit: async (event: SubmitEvent) => {
                    try {
                        const inputData = (event.target as Element).querySelector('.select-user:checked');
                        const userId = inputData ? (inputData as HTMLInputElement).value : null;
                        if (userId) {
                            await ChatController.deleteUserToChat(this.props.selectedChat, +userId);
                            ModalController.close();
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
