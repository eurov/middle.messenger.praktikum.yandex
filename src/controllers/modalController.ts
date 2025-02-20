import { ModalTypes, store } from '../utils/store';

export class ModalController {
    static open(type: ModalTypes) {
        store.set('modal', type);
    }

    static close() {
        store.set('modal', undefined);
    }
}
