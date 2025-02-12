export default `
    <a href="/messenger" class="profile__back-button">
        <div class="profile__back-icon">
            <img src="/arrow-left-short.svg" />
        </div>
    </a>
    <div class="profile__main-content">
        <div class="profile__card">

            <div class="profile__avatar">
                {{{changeAvatar}}}
            </div>
            
            <h3 class="profile__name">{{first_name}} {{second_name}}</h3>
                

            <div class="profile__personal-data">

                <div class="profile__field">
                    <div class="profile__field-caption">First name</div>
                    <div class="profile__field-value">
                        {{first_name}}
                    </div>
                </div>
                <div class="profile__field">
                    <div class="profile__field-caption">Second name</div>
                    <div class="profile__field-value">
                        {{second_name}}
                    </div>
                </div>
                <div class="profile__field">
                    <div class="profile__field-caption">Login</div>
                    <div class="profile__field-value">
                        {{login}}
                    </div>
                </div>
                <div class="profile__field">
                    <div class="profile__field-caption">Display name</div>
                    <div class="profile__field-value">
                        {{display_name}}
                    </div>
                </div>
                <div class="profile__field">
                    <div class="profile__field-caption">Email</div>
                    <div class="profile__field-value">
                        {{email}}
                    </div>
                </div>
                <div class="profile__field">
                    <div class="profile__field-caption">Phone</div>
                    <div class="profile__field-value">
                        {{phone}}
                    </div>
                </div>

            </div>
            <div class="profile__controls">
                {{{ changeDataButton }}}
                {{{ changePasswordButton }}}
                {{{ logoutButton }}}
            </div>

        </div>
    </div>`;
