import tamplate from './404.tpl';
import { Block } from '@utils/block';


export default class NotFoundPage extends Block {
    constructor() {
        super({
            code: 404,
            message: 'Page not found',
        });
    }

    override render(): DocumentFragment {
        return this.compile(tamplate, this.props);
    }
}
