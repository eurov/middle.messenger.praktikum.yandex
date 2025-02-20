import template from './link.tpl';
import { Block, ElementProps } from '../../utils/block';



interface ILink {
    href?: string,
    text?: string
}
export default class Link extends Block<ILink> {
    constructor(props: ILink & ElementProps) {
        super({
            ...props,
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
