import Handlebars from "handlebars";
import template from './login.hbs?raw';


export const loginPage = () => {
    const compiled = Handlebars.compile(template);
    return compiled();

};
