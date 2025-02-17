import { expect } from 'chai';
import { useFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { HTTPTransport, Methods } from './HTTPTransport';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    let requests: SinonFakeXMLHttpRequest[] = [];
    const endpoint = '/user';
    beforeEach(() => {
        xhr = useFakeXMLHttpRequest();

        // @ts-expect-error: Should XMLHttpRequest
        global.XMLHttpRequest = xhr;

        xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        };

        instance = new HTTPTransport(endpoint);
    });

    afterEach(() => {
        requests = [];
    });

    it('should send GET request', () => {
        instance.get('/user');
        const [request] = requests;
        expect(request.method).to.eq(Methods.Get);
    });

    it('should send POST request', () => {
        instance.post('/user/search');
        const [request] = requests;
        expect(request.method).to.eq(Methods.Post);
    });

    it('should send PUT request', () => {
        instance.put('/user/profile');
        const [request] = requests;
        expect(request.method).to.eq(Methods.Put);
    });

    it('should send DELETE request', () => {
        instance.delete('/chats');
        const [request] = requests;
        expect(request.method).to.eq(Methods.Delete);
    });

    it('should send PATCH request', () => {
        instance.patch('/chats');
        const [request] = requests;
        expect(request.method).to.eq(Methods.Patch);
    });
});
