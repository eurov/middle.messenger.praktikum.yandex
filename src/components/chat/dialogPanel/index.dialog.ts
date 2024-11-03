import template from './dialog.tpl';
import { Block } from '@utils/block';


interface IDialogPanel {
    name?: string
    messages: string[]
}


export default class DialogPanel extends Block<IDialogPanel> {
    constructor(props: IDialogPanel) {
        super({
            ...props,
            classes: 'chat__main-screen',
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

