export default `
    <a href="/profile" class="profile__back-button">
        <div class="profile__back-icon">
            <img src="/arrow-left-short.svg" />
        </div>
    </a>
    <div class="profile__main-content">
        <form class="profile__card">
            <div class="profile__avatar">
                {{{profileAvatar}}}
            </div>
            <input type="file" id="change-avatar" name="avatar" />
            <h3 class="profile__name">My profile</h3>

            {{{ profileInput }}}
            {{{ button }}}
        </form>
    </div>`;
