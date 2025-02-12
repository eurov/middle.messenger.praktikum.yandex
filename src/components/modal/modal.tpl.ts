export default `<div class="modal  {{#if modalType}}modal__active{{/if}}">
<div class="modal-overlay">
  <div class="modal-content">
    {{#if (isEqual modalType "createChat")}}
      {{{createChat}}}
    {{/if}}
    {{#if (isEqual modalType "addUser")}}
      {{{addUser}}}
    {{/if}}
    {{#if (isEqual modalType "deleteUser")}}
      {{{deleteUser}}}
  {{/if}}
  </div>
</div>
</div>`;
