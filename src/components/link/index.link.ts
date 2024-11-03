import template from './link.tpl';
import { Block } from '@utils/block';



interface ILink {
    href: string,
    text: string
}
export default class Link extends Block<ILink> {
    constructor(props: ILink) {
        super({
            ...props,
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
