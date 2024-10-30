export default `
<div class="form-control">
    <input class="input__field" 
        name="{{name}}"
        placeholder="{{placeholder}}"
        value="{{value}}"
        type={{type}} />
    {{#if error}}<div title="{{error}}" class="error-field">Некорректный ввод</div>{{/if}}
</div>`;
