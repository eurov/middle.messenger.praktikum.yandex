export default `{{#each chatsList}}
<li class="chat-item" data-chat={{id}}>
    {{#if avatar}}
        <img class='chat-item__avatar' src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">
    {{else}}
        <div class='chat-item__avatar'></div>
    {{/if}}
    <div class="chat-item__content-title"">{{title}}</div>
    {{#if last_message}}
    <div class="chat-item__content-message">{{last_message.user.login}}: {{last_message.content}}</div>
    <div class="chat-item__content-date">{{last_message.time}}</div>
    {{/if}}
</li>
{{/each}}`

