import template from './avatar.tpl';
import { Block, ElementProps } from '../../utils/block';
import { withStore, IState } from '../../utils/store';


class Avatar extends Block {
    constructor(props: ElementProps) {
        super({
            ...props,
            classes: 'avatar',
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
const mapStateToProps = (state: IState) => {
    return {
        url: state.chats.find((chat) => chat.id === state.currentChat)?.avatar,
    };
};

export default withStore(mapStateToProps)(Avatar);
