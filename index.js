// Function to fetch data from the Game of Thrones API
function fetchBooks() {
  // Ensure that fetch() is returning a promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        // Throw an error if the response is not ok
        throw new Error('Network response was not ok');
      }
      return response.json();  // Convert the response to JSON
    })
    .then(data => {
      renderBooks(data);  // Pass the JSON data to the renderBooks function
      return data;  // Return the data for potential use in tests
    })
    .catch(error => {
      console.error('Error fetching books:', error);  // Handle any errors
    });
}

// Function to render books on the webpage
function renderBooks(books) {
  const main = document.querySelector('main');  // Select the <main> element
  main.innerHTML = '';  // Clear existing content

  books.forEach(book => {
    const h2 = document.createElement('h2');  // Create a new <h2> element
    h2.textContent = book.name;  // Set the text content to the book's name
    main.appendChild(h2);  // Append the <h2> element to the <main> element
  });
}

// Call fetchBooks when the page has loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();  // Fetch and render the books when the DOM is fully loaded
});
