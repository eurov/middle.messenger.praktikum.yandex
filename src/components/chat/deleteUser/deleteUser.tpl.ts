export default `
<div lass="modal-title>Delete user</div>
<div class="add-user">
{{#each users}}
<div class="add-user__card" data-user-id={{id}}>
Delete {{login}}
</div>
{{/each}}
<div class="actions-container">
    {{{buttonSearch}}}
    {{{closeButton}}}
</div>
</div>`;
