export default `
<div>Add user</div>
<form action="" method="get">
    {{{input}}}
    {{{button}}}
    <div class="add-user">
        {{#each users}}
        <div class="add-user__card" data-user-id={{id}}>
            Add {{login}}
        </div>
        {{/each}}
    </div>
</form>`;
