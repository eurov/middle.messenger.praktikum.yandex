import { button } from './button.tpl';
import { Block } from '@utils/block';

export default class Button extends Block<{ text: string }> {
    constructor(props) {
        super({
            ...props,
            style: 'buttons',
        });
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
