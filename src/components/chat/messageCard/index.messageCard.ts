
import template from './messageCard.tpl';
import { withStore, IState } from '@utils/store';
import { Block } from '@utils/block';


class MessageCard extends Block {
    constructor(props: any) {
        super({
            ...props,
            classes: ['chat-dialog__messages'],
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    const messages = state.currentChat ? (state.messages || {})[state.currentChat] : [];
    return {
        messages: messages?.map((message) => ({
            isAuthor: message.user_id === state.user?.id,
            date: new Date(message.time).toLocaleString('ru', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            text: message.content,
        })),
    };
};

export default withStore(mapStateToProps)(MessageCard);
