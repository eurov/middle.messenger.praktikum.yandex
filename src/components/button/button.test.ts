import { expect } from 'chai';
import Button from './index.button';


describe('Button', () => {
    it('should render', () => {
        const button = new Button({ text: 'Send' });
        expect(button).to.be.a('object');
    });

    it('should be an instance of HTMLButtonElement', () => {
        const button = new Button({ text: 'Submit' });
        const { element } = button;
        expect(element).to.be.instanceof(window.HTMLButtonElement);
    });

    it('should render text', () => {
        const text = 'Cancel';
        const button = new Button({ text: text });
        const { element } = button;
        expect(element.innerHTML).to.contain(text);
    });

    it('should be clickable', () => {
        let isClick = false;
        const button = new Button({
            text: 'Ok',
            events: {
                click: () => {
                    isClick = true;
                },
            },
        });
        const { element } = button;
        element.click();
        expect(isClick).to.be.eq(true);
    });
});
