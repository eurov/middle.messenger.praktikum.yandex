import Handlebars from "handlebars";
import template from './signup.hbs?raw';


export const signupPage = () => {
    const compiled = Handlebars.compile(template);
    return compiled();
};
