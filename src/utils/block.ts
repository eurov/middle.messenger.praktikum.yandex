import Handlebars from 'handlebars';
import { v4 as UUIDv4 } from 'uuid';
import EventBus from './eventBus';

type ObjectType = Record<string, any>;

type ElementProps = {
    classes?: string | string[],
    events?: Record<string, Event>,
    children?: Record<string, Block>
};

export abstract class Block<Props extends Record<string, any> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    eventBus: () => EventBus;

    props: Props;

    children: Record<string, Block> = {};

    _element: HTMLElement = this._createDocumentElement('div');

    _meta: ObjectType = {};

    _id = UUIDv4();

    constructor(props: Props & ElementProps, tagName: string = 'div') {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);
        this._setChildren();
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus): void {
        console.log('_registerEvents');
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources(): void {
        // console.log('_createResources');
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._setClassList();
        this._setAttrs()
    }

    initChildren(): void { }

    init(): void {
        // console.log('init');
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.initChildren();
    }

    _componentDidMount(): void {
        // console.log('_componentDidMount');
        this.componentDidMount();
    }

    componentDidMount(_oldProps?: ObjectType): void { }

    dispatchComponentDidMount(): void {
        // console.log('dispatchComponentDidMount');
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: ObjectType, newProps: ObjectType): void {
        console.log('_componentDidUpdate');
        console.log(oldProps);
        console.log(newProps);
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        Object.assign(oldProps, newProps);
        this._render();
    }

    componentDidUpdate(_oldProps: ObjectType, _newProps: ObjectType): boolean {
        // console.log('componentDidUpdate');
        return true;
    }

    setProps = (nextProps: ObjectType): void => {
        console.log('setProps');
        console.log(nextProps);
        if (!nextProps) {
            return;
        }
        this._componentDidUpdate(this.props, nextProps);
        // Object.assign(this.props, nextProps)
    };

    get element(): HTMLElement {
        // console.log('element');
        return this._element;
    }

    _render(): void {
        console.log('_render');
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._deleteEvents();
        this._element.innerHTML = '';
        this._element.append(block);
        this._setEvents();
    }

    render(): any { }

    compile(template: string, context: ObjectType): DocumentFragment {
        console.log('compile');
        // console.log(context);
        const contextAndStubs = { ...context };
        const arraysElementMap = new Map();
        Object.entries(this.children).forEach(([name, child]: [string, any]) => {
            // console.log(name, child)
            // console.log(contextAndStubs.children[name]._id);
            // console.log(Array.isArray(child))
            if (Array.isArray(child)) {
                const arrayElementsId = UUIDv4();
                contextAndStubs[name] = `<div data-id="${arrayElementsId}"></div>`;
                arraysElementMap.set(name, arrayElementsId); Object.entries
            // } else contextAndStubs[name] = `<div data-id="${contextAndStubs.children[name]._id}"></div>`;
            } else contextAndStubs[name] = `<div data-id="${child._id}"></div>`;
        });
        const temp = document.createElement('template');
        temp.innerHTML = Handlebars.compile(template)(contextAndStubs);
        Object.entries(this.children).forEach(([name, child]: [string, ObjectType]) => {
            const isElementArray = Array.isArray(child);
            const stub = isElementArray
                ? temp.content.querySelector(`[data-id="${arraysElementMap.get(name)}"]`)
                // : temp.content.querySelector(`[data-id="${contextAndStubs.children[name]._id}"]`);
                : temp.content.querySelector(`[data-id="${child._id}"]`);
            // console.log(stub)
            if (!stub) return;
            if (isElementArray) {
                const nodeArray = child.map((childItem) => {
                    childItem.getContent()?.append(...Array.from(stub.childNodes));
                    return childItem.getContent();
                });
                stub.replaceWith(...nodeArray);
            } else {
                child.getContent()?.append(...Array.from(stub.childNodes));
                stub.replaceWith(child.getContent());
            }
        });
        return temp.content;
    }

    _setEvents(): void {
        // console.log('_setEvents');
        const { events = {} } = this.props;
        console.log(events)
        Object.keys((events as ObjectType)).forEach((eventName) => {
            if (eventName === 'blur') {
                this._element.querySelector('input')?.addEventListener(eventName, events[eventName]);
            } else {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }

    _setChildren(): void {
        // console.log('_setChildren');
        const { children = {} } = this.props;
        this.children = children;
    }

    _deleteEvents(): void {
        // console.log('_deleteEvents');
        const { events = {} } = this.props;
        Object.keys((events as ObjectType)).forEach((eventName) => {
            if (eventName === 'blur') {
                this._element.querySelector('input')?.removeEventListener(eventName, events[eventName]);
            } else {
                this._element.removeEventListener(eventName, events[eventName]);
            }
        });
    }

    getContent(): HTMLElement {
        // console.log('getContent');
        return this.element;
    }

    _makePropsProxy(props: Props): Props {
        // console.log('_makePropsProxy');
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as keyof Props];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                // eslint-disable-next-line no-param-reassign
                target[prop as keyof Props] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
        // console.log('_createDocumentElement');
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    _setClassList(): void {
        const { classes = null } = this.props;
        // console.log(style);
        if (classes !== null) {
            if (Array.isArray(classes)) {
                classes.forEach((c) => { this._element.classList.add(c); });
            } else this._element.classList.add(classes);
        }
    }

    _setAttrs(): void {
        const { attributes = null } = this.props;
        console.log(attributes)
        if (attributes !== null) {
            Object.entries(attributes).forEach(([key, value]: [string, any]) => {
                this._element.setAttribute(key, value.toString())
            });
        }
    }

    show(): void {
        // console.log('show');
        this.getContent().style.display = 'block';
    }

    hide(): void {
        // console.log('hide');
        this.getContent().style.display = 'none';
    }
}
