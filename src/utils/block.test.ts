import { assert } from 'chai';
import { test } from 'mocha';
import { Block } from './block';


class TestBlock extends Block {
    constructor(props: Record<string, unknown>) {
        super({ ...props }, 'span');
    }

    render() {
        return this.compile('{{content}}', this.props);
    }
}

const testBlock = new TestBlock({ content: 'test message' });

describe('Block', () => {
    test('should render correctly', () => {
        assert.equal(testBlock.getContent()?.innerHTML, 'test message');
    });

    test('should render with tag', () => {
        assert.equal(testBlock.getContent()?.tagName.toLowerCase(), 'span');
    });

    test('should render given props', () => {
        testBlock.setProps({
            content: 'Another test message',
        });

        assert.equal(testBlock.getContent()?.innerHTML, 'Another test message');
    });
});
