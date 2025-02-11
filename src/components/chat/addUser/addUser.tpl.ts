export default `
<div class="modal-title">Add user</div>
<form action="" method="get">
    {{{input}}}
    <div class="actions-container">
        {{{buttonSearch}}}
        {{{closeButton}}}
    </div>
    <div class="add-user">
        {{#each users}}
        <div class="add-user__card" data-user-id={{id}}>
            Add {{login}}
        </div>
        {{/each}}
    </div>
</form>`;
