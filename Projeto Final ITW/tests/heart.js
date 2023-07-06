// Get a reference to the table element
const table = document.querySelector('.table');

// Add an event listener for the click event on the table
table.addEventListener('click', (event) => {
  // Check if the element that was clicked was a button with the "favorite" id
  if (event.target.matches('#favorite')) {
    // Get the parent row of the button
    const row = event.target.closest('tr');

    // Get the "Id" value of the row
    const rowId = row.querySelector('td:first-child').textContent;

    // Toggle the "fa-solid" class on the button's child element
    event.target.firstElementChild.classList.toggle('fa-solid');

    // Check if the "fa-solid" class is present on the button's child element
    if (event.target.firstElementChild.classList.contains('fa-solid')) {
      // If the class is present, add the row's "Id" value to the session storage
      sessionStorage.setItem(rowId, 'favorite');
    } else {
      // If the class is not present, remove the row's "Id" value from the session storage
      sessionStorage.removeItem(rowId);
    }
  }
});

// Add an event listener for the load event on the page
window.addEventListener('load', () => {
  // Get all the rows in the table
  const rows = table.querySelectorAll('tbody tr');

  // Iterate through the rows
  for (const row of rows) {
    // Get the "Id" value of the row
    const rowId = row.querySelector('td:first-child').textContent;

    // Get the button element in the row
    const favoriteButton = row.querySelector('#favorite');

    // Check if the row's "Id" value is present in the session storage
    if (sessionStorage.getItem(rowId) === 'favorite') {
      // If the value is present, add the "fa-solid" class to the button's child element
      favoriteButton.firstElementChild.classList.add('fa-solid');
    }
  }
});


