export default `
{{#if uploadInput}}
<input id="change_avatar" 
    type="file" accept="image/*" 
    name="avatar" 
    class="profile-avatar__input">
{{/if}}
<label for="change_avatar" class="profile-avatar__label">
    <img alt="icon" 
        src={{url}} 
        class="profile-avatar__img" />
</label>`;
