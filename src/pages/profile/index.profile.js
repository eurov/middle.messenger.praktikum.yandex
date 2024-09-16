import Handlebars from "handlebars";
import template from './profile.hbs?raw';


const fixtures = {
    'Name': 'Homer',
    'Last name': 'Simpson',
    'Email': 'donut@inbox.com',
    'Login': 'D\'oh',
    'Chat name': 'Homer',
    'Phone': '+7(999)1234567'
}

let profileData = Object.entries((fixtures)).map(([key, value]) => ({key, value}));

export const profilePage = () => {
    const compiled = Handlebars.compile(template);
    return compiled({
        profileData
    });
};
