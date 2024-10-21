function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }
  
  // Add form submission functionality (optional)
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
  });
  
  // For search bar
  function searchBooks() {
    // Get the search term
    let input = document.getElementById('bookSearch').value.toLowerCase();
    let bookList = document.getElementById('bookList');
    let books = bookList.getElementsByClassName('book-item');
  
    // Loop through all book items and hide those that don't match the search term
    for (let i = 0; i < books.length; i++) {
      let bookItem = books[i];
      let title = bookItem.querySelector('h3');
      let author = bookItem.querySelector('p');
  
      let titleText = title.innerText.toLowerCase();
      let authorText = author.innerText.toLowerCase();
  
      if (titleText.includes(input) || authorText.includes(input)) {
        bookItem.style.display = ''; // Show the book item
      } else {
        bookItem.style.display = 'none'; // Hide the book item
      }
    }
  }