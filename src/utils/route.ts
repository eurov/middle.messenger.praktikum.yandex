export class Route {
    _pathname: string;

    _blockClass: any;

    _block: any | null;

    _props: Record<string, any>;

    constructor(pathname: string, view: any, props: Record<string, any>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            const root = document.getElementById(this._props.rootQuery)
            if (root) {
                root.append(this._block.getContent());
            }
            return;
        }

        this._block.show();
    }
}
