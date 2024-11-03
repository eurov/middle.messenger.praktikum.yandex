export default `
<div class="profile__field">
    <div class="profile__field-caption">{{placeholder}}</div>
    <div class="profile__field-value">
    <input class="profile__field-input{{#if error}} invalid{{/if}}"
            name="{{name}}"
            placeholder="{{placeholder}}"
            value="{{value}}"
            required/>
        {{#if error}}
            <div title="{{error}}" class="input-error">
                Некорректный ввод
            </div>
        {{/if}}
    </div>
</div>`;
