import template from './profileAvatar.tpl';
import { Block, ElementProps } from '@/utils/block';
import { withStore, IState } from '@/utils/store';


export enum ProfileAvatarSizes {
    MEDIUM = 'medium',
    SMALL = 'small',
    BIG = 'big'
}

export interface IProfileAvatarProps extends ElementProps {
    url?: string,
    variant?: ProfileAvatarSizes
}


const mapStateToProps = (state: IState) => ({
    url: `https://ya-praktikum.tech/api/v2/resources/${state.user?.avatar}`,
});

class ProfileAvatar extends Block {
    constructor({ variant = ProfileAvatarSizes.MEDIUM, ...props }: IProfileAvatarProps) {
        super({
            ...props,
            classes: `profile-avatar__${variant}`,
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const ProfileAvatarWithStore = withStore(mapStateToProps)(ProfileAvatar);

export default ProfileAvatarWithStore;
