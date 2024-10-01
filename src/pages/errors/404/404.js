import Handlebars from "handlebars";
import template from './404.hbs?raw';

export const notFoundPage = () => {
    const compiled = Handlebars.compile(template);
    return compiled({
        code: 404,
        message: 'Page not found'
    });
};
