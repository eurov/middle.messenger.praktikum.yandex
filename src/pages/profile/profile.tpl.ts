export default `
    <a href="/chats" class="profile__back-button">
        <div class="profile__back-icon">
            {{!-- <img src="#"/> --}}
        </div>
    </a>
    <div class="profile__main-content">
        <form class="profile__card">
            <label class="profile__avatar" for="change-avatar">
                {{!-- <img src="#" /> --}}
            </label>
            <input type="file" id="change-avatar" name="avatar" />
            <h3 class="profile__name">My profile</h3>
            <div class="profile__personal-data">
                {{#each profileData}}
                <div class="profile__field">
                    <div class="profile__field-caption">{{this.kwargs.key}}</div>
                    <div class="profile__field-value">
                        {{#if../edit }}
                            <input type="text" class="profile__field-input" name={{this.name}} placeholder="{{this.kwargs.value}}">
                        {{else}}
                            {{this.kwargs.value}}
                        {{/if}}
                    </div>
                </div>
                {{/each}}
            </div>
            <div class="profile__controls">
                {{#if edit}}{{{ button }}}{{/if}}
                {{{ link }}}
            </div>
        </form>`;
