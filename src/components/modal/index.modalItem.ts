import { Block, ElementProps } from '@/utils/block';

export default class ModalItemBlock extends Block {
    constructor(props: { text: string, style?: string, } & ElementProps) {
        super({
            ...props,
            style: ['gray-text', props.style, 'button-text'],
        }, 'p');
    }

    render(): DocumentFragment {
        return this.compile('{{text}}', this.props);
    }
}   
