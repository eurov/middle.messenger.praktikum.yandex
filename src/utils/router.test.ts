import { expect } from 'chai';
import * as sinon from 'sinon';
import { router } from './router';

describe('Router', () => {
    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };
    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    afterEach(() => {
        router.destroy();
    });

    const getContentFake = sinon.fake.returns(document.createElement('div'));

    const BlockMock = class {
        getContent = getContentFake;
    };

    it('should return Router instance', () => {
        const result = router.use('/', BlockMock);
        expect(result).to.eq(router);
    });

    it('should render page on index', () => {
        router.use('/', BlockMock).start();
        expect(getContentFake.callCount).to.eq(1);
    });

    it('should move forward', () => {
        router.use('/', BlockMock).start();
        router.forward();
        expect(getContentFake.callCount).to.greaterThanOrEqual(1);
    });

    it('should move back', () => {
        router.use('/', BlockMock).start();
        router.back();
        expect(getContentFake.callCount).to.greaterThanOrEqual(1);
    });

    it('should render and move to messages page', () => {
        router.use('/messages', BlockMock).start();
        router.go('/messages');
        expect(window.location.href).to.eq('http://localhost:3000/messages');
    });
});
