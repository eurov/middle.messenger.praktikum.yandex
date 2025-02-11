export default `
    <a href="/profile" class="profile__back-button">
        <div class="profile__back-icon">
            <img src="/arrow-left-short.svg" />
        </div>
    </a>
    <div class="profile__main-content">
        <form class="profile__card">
            <label class="profile__avatar" for="change-avatar">
                {{!-- <img src="#" /> --}}
            </label>
            <input type="file" id="change-avatar" name="avatar" />
            <h3 class="profile__name">My profile</h3>

            {{{ profileInput }}}
            {{{ button }}}
        </form>
    </div>`;
