import { ModalTypes, store } from '@/utils/store';

export class ModalController {
    static async open(type: ModalTypes) {
        store.set('modal', type);
    }

    static close() {
        store.set('modal', undefined);
    }
}
