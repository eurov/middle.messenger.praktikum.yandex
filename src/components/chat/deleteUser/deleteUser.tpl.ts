export default `
<div class="modal-title">Delete user</div>
<form id="delete-form" action="" method="get">
    <div class="delete-user">
        {{#each users}}
            <div class="delete-user__card" data-user-id={{id}}>
                <input class="select-user"
                    type="radio" 
                    name="userId"
                    id="user-{{id}}" 
                    value="{{id}}" />
                <label for="user-{{id}}">{{login}}</label>
            </div>
        {{/each}}
        <div class="actions-container">
            {{{buttonDelete}}}
            {{{closeButton}}}
        </div>
    </div>
</form>`;
