// Get references to the elements
const addPillButton = document.getElementById('addPillButton');
const newPillInput = document.getElementById('newPillInput');
const pillList = document.getElementById('PillList');
const newPillOutput = document.getElementById('newPillOutput');

// Add event listener to the button
addPillButton.addEventListener('click', function() {
    const pillName = newPillInput.value.trim();

    // Check if the input is not empty
    if (pillName) {
        // Create a new list item (<li>)
        const li = document.createElement('li');

        // Create a new checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeButton');  // Add a class for styling

        // Add functionality to the remove button
        removeButton.addEventListener('click', function() {
            pillList.removeChild(li);  // Remove the entire <li> element from the list
        });

        // Add the checkbox, pill name, and remove button to the list item
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(` ${pillName}`));  // Add pill name with a space before it
        li.appendChild(removeButton);  // Append the Remove button

        // Append the new list item to the pill list
        pillList.appendChild(li);

        // Optionally, also display it in the paragraph
        newPillOutput.textContent = `(You added: ${pillName})`;

        // Clear the input field
        newPillInput.value = '';

        // Clear the output message after 1 minute (60000 milliseconds)
        setTimeout(function() {
            newPillOutput.textContent = '';
        }, 60000); // 60000 ms = 1 minute
    } else {
        // Handle empty input case
        newPillOutput.textContent = 'Please enter a pill name.';

        // Clear the error message after 1 minute
        setTimeout(function() {
            newPillOutput.textContent = '';
        }, 60000); // 60000 ms = 1 minute
    }
});
