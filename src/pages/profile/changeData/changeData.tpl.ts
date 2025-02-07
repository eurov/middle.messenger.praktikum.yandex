export default `
    <a href="/profile" class="profile__back-button">
        <div class="profile__back-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
            </svg>
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
