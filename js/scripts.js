function newItem() {

    // Adding a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
    alert('You must write something');
    } else {
    $('#list').append(li);
    $('#input').val('')
    }
    
    // Crossing an item out
    function crossOut() {
    li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);
    
    // Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    function deleteListItem() {
    li.addClass('delete');
    }
    crossOutButton.on('click', deleteListItem);

    $('#list').sortable()
}
    