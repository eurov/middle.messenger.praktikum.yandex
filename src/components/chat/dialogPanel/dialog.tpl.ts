export default `
{{#if messages}}
<div class="chat-dialog">
    <div class="chat-dialog__header">
        <div class="chat-dialog__avatar"></div>
        <div class="chat-dialog__name">{{name}}</div>
        <button class="chat-dialog__menu-button">
            {{!-- <img src="#" /> --}}
           </button>
    </div>
    <div class="chat-dialog__messages">
        <div class="chat-dialog__date-label">June 19</div>
        {{#each messages}}
        <div class="chat-dialog__message{{#if this.senderIsYou}} chat-dialog__message_yours{{/if}}">
            <div class="chat-dialog__message-text">{{this.text}}</div>
            <div class="chat-dialog__message-time">
                {{#if this.delivered}}
                {{!-- <img src="#" /> --}}
                {{/if}}
                {{this.time}}
            </div>
        </div>
        {{/each}}
    </div>
    <div class="chat-dialog__input-container">
        <input class="chat-dialog__input"
            placeholder="Message"
            name="message"
            required/>
        <button type="button" class="chat-dialog__send">
            {{!-- <img src="#" /> --}}
        </button>
    </div>
</div>
{{else}}
<div class="container centered">
    <div class="chat__empty-message">Select a chat to open a dialog box</div>
</div>
{{/if}}`;
