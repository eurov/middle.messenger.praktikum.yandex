import template from './profile.tpl';
import { Block } from '@/utils/block';
import { testProfileData } from "@/temp/fixtures";
import Button from '@/components/button/index.button';
import Link from '@/components/link/index.link';


const profileData = Object.entries((testProfileData)).map(([name, kwargs]) => ({ name, kwargs }));
const button = [new Button({
    text: 'Save',
    classes: ['profile__save-button', 'button', 'primary'],
})];
const link = [new Link({
    text: 'Edit',
    href: '/profile/edit',
    classes: ['profile__field'],
}), new Link({
    text: 'Change password',
    href: '#',
    classes: ['profile__field'],
}), new Link({
    text: 'Log out',
    href: '/login',
    classes: ['profile__field'],
})
];

export default class ProfilePage extends Block {
    constructor({edit = false}) {
        super({
            classes: 'profile__page',
            edit,
            profileData,
            children: {
                button,
                link
            }
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
