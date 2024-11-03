export default `
    <div class="chat-list-item__avatar"></div>
    <div class="chat-list-item__name">{{name}}</div>
    <div class="chat-list-item__message">
        {{#if lastMessageIsYours}}
            <strong class="chat-list-item__mine-mark">You:</strong>
        {{/if}}
        {{lastMessage}}
    </div>
    <div class="chat-list-item__time">{{time}}</div>
    <div class="chat-list-item__unread-counter"></div>
`;
