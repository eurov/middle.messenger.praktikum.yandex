import template from './button.tpl';
import { Block } from '../../utils/block';
import { ElementProps } from '../../utils/block';


interface IButton extends ElementProps {
    text: string
}

export default class Button extends Block<IButton> {
    constructor(props: IButton, tagName: string = 'button') {
        super({
            ...props,
        }, tagName);
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
