export default `
<div class="form-control">
    <input class="input__field{{#if error}} invalid{{/if}}"
        name="{{name}}"
        placeholder="{{placeholder}}"
        value="{{value}}"
        {{#if type}}type={{type}}{{/if}} 
        {{#if required}}required{{/if}}/>
    {{#if error}}
        <div title="{{error}}" class="input-error">
            Некорректный ввод
        </div>
    {{/if}}
</div>`;
