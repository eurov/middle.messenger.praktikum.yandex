import Handlebars from "handlebars";
import template from './profile.hbs?raw';
import { testProfileData } from "../../temp/fixtures";


const profileData = Object.entries((testProfileData)).map(([name, kwargs]) => ({ name, kwargs }));

export const profilePage = (kwargs) => {
    const compiled = Handlebars.compile(template);
    return compiled({
        ...kwargs,
        profileData
    });
};
