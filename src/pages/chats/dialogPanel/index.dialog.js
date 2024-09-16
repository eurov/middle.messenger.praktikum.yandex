import Handlebars from "handlebars";
import template from './dialog.hbs?raw';


export const chatDialog = (item) => {
    const compiled = Handlebars.compile(template)
    return compiled({activeChat: item.chat});
}

