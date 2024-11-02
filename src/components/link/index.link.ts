import template from './link.tpl';
import { Block } from '@utils/block';

export default class Link extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
