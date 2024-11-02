import template from './button.tpl';
import { Block } from '@utils/block';

export default class Button extends Block {
    constructor(props, tagName: string = 'button') {
        super({
            ...props,
        }, tagName);
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
