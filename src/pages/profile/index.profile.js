import Handlebars from "handlebars";
import template from './profile.hbs?raw';
import { testProfileData } from "../../temp/fixtures";


const profileData = Object.entries((testProfileData)).map(([key, value]) => ({key, value}));

export const profilePage = () => {
    const compiled = Handlebars.compile(template);
    return compiled({
        profileData
    });
};
