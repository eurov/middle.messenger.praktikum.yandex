export default `
<div class="modal-title">Add user</div>
<form id="search-form" action="" method="get">
    <div class="search-container">
        {{{input}}}
        <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>        
        </button>
    </div>
</form>
<form id="add-user-form" action="" method="get">
    {{#if users}}
    <h4>Choose:</h4>
    <div class="add-user">
        {{#each users}}
        <div class="add-user__card" data-user-id={{id}}>
            <input class="select-user" 
                type="radio" 
                id="user-{{id}}" 
                name="userId"
                value="{{id}}" />
            <label for="user-{{id}}">{{login}}</label>
        </div>
        {{/each}}
    </div>
    {{/if}}
    <div class="actions-container">
        {{{buttonSearch}}}
        {{{closeButton}}}
    </div>
</form>`
;
