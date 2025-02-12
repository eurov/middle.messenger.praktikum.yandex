import template from './profileAvatar.tpl';
import { Block, ElementProps } from '@/utils/block';
import { withStore, IState } from '@/utils/store';


export enum ProfileAvatarSizes {
    MEDIUM = 'medium',
    SMALL = 'small',
    BIG = 'big'
}

export interface IProfileAvatarProps extends ElementProps {
    url: string | null,
    size?: ProfileAvatarSizes
}


class ProfileAvatarBlock extends Block {
    constructor({ size = ProfileAvatarSizes.MEDIUM, ...props }: IProfileAvatarProps) {
        console.log(props)
        super({
            ...props,
            classes: `profile-avatar__${size}`,
        });
    }
    
    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
    url: state.user?.avatar ? `https://ya-praktikum.tech/api/v2/resources/${state.user?.avatar}` : '/empty-avatar.png',
});


export const ProfileAvatar = withStore(mapStateToProps)(ProfileAvatarBlock);

