import { Block, ElementProps } from '../../utils/block';

export default class ModalItemBlock extends Block {
    constructor(props: { text: string, style?: string, } & ElementProps) {
        super({
            ...props,
        }, 'span');
    }

    render(): DocumentFragment {
        return this.compile('{{text}}', this.props);
    }
}   
