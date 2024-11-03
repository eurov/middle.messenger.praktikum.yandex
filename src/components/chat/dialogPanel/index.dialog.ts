import template from './dialog.tpl';
import { Block } from '@utils/block';


export default class DialogPanel extends Block {
    constructor(props) {
        super({
            ...props,
            classes: 'chat__main-screen',
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

