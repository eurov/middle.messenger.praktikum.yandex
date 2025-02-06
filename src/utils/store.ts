
import { set } from './helpers';
import EventBus from './eventBus';
import {Block} from '@utils/block'
import { IUser } from '@/api/authApi';
import { IChat, IChatUser } from '@api/chatApi';
import { Message } from '@controllers/messageController';


export enum StoreEvents {
    UPDATE = 'Updated',
}

export enum PopupTypes {
    CREATE_CHAT = 'createChat',
    ADD_USER = 'addUser',
    DELETE_USER = 'deleteUser',
}

export interface IState {
    user?: IUser,
    chats: IChat[],
    popup: undefined | PopupTypes,
    currentChat: number | undefined,
    messages: Record<number, Message[]>,
    users: IChatUser[],
    findUsers: IChatUser[]
}

class Store extends EventBus {
    private state: IState = {
        chats: [],
        popup: undefined,
        currentChat: undefined,
        messages: {},
        users: [],
        findUsers: [],
    };

    getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        try {
            set(this.state, path, value);
            this.emit(StoreEvents.UPDATE, this.getState());
        } catch (e) {
            console.error(e);
        }
    }
}

export const store = new Store();


export function withStore<S extends Record<string, any>>(mapStateToProps: (state: IState) => S) {
    return (Component: typeof Block<S>) => {
        return class extends Component {
            constructor(props: any) {
                const prevState = mapStateToProps(store.getState())
                console.log(prevState)
                super({ ...props, ...prevState });
                store.on(StoreEvents.UPDATE, () => {
                    const newState = mapStateToProps(store.getState());
                    console.log(newState)
                    this.setProps(newState);
                });
            }
        };
    };
};
