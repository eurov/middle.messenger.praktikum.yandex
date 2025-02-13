import { Route } from './route';

export class Router {
    routes: Route[];

    history: History;

    _currentRoute: Route | null;

    _rootQuery: string;

    __instance?: Router;

    constructor(rootQuery: string = 'app') {
        if (this.__instance) {
            return this.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        this.__instance = this;
    }

    use(pathname: string, block: any) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event: Event) => {
            this._onRoute((event.currentTarget as Document)?.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (route && this._currentRoute) {
            this._currentRoute.leave();
        }

        if (route) {
            this._currentRoute = route;
            route.render();
        }
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}

export const router = new Router();
