export default `
{{#if selectedChat}}
<div class="chat-dialog">
    <div class="chat-dialog__header">
        <div class="chat-dialog__header-left">
            {{{avatar}}}{{chat.title}}
        </div>
        <div class="chat-dialog__header-button">
            <div class="chat-dialog__header-button-action">
                <img alt="icon" src="/three-dots-vertical.svg">
                <div class="chat-dialog__header-list">
                    <div>{{{addUser}}}</div>
                    <div>{{{deleteUser}}}</div>
                </div>
            </div>
        </div>
    </div>
    {{{messageCards}}}
    <form class="chat-dialog__input-container">
        <input class="chat-dialog__input"
            placeholder="Enter a message"
            name="message"
            required/>
        <button type="submit" class="chat-dialog__send">
            <img src="/arrow-up-short.svg" />
        </button>
    </form>
    {{else}}
    <div class="container centered">
        <div class="chat__empty-message">Select a chat to open a dialog box</div>
    </div>
</div>
{{/if}}`;
