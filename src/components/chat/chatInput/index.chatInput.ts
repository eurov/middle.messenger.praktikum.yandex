import template from './chatinput.tpl';
import { Block } from '@utils/block';


interface IChatInput {
    type: string
    name: string
    placeholder?: string,
    required?: boolean
}


export class ChatInput extends Block<IChatInput> {
    constructor(props: IChatInput) {
        super({
            ...props,
            classes: ['input-chat'],
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
