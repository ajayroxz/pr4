document.getElementById('todo-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the input value
    var newTask = document.getElementById('todo-input').value;

    // Create a new list item
    var li = document.createElement('li');
    li.textContent = newTask;

    // Add the new list item to the list
    document.getElementById('todo-list').appendChild(li);

    // Clear the input field
    document.getElementById('todo-input').value = '';
});
