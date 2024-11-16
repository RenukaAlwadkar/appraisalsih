document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');

    // Language toggle functionality
    languageToggle.addEventListener('click', function() {
        if (this.textContent === 'English') {
            this.textContent = 'हिंदी';
            // Here you would add logic to change the language of the page
        } else {
            this.textContent = 'English';
            // Here you would add logic to change the language back to English
        }
    });

    // Search functionality
    searchButton.addEventListener('click', function() {
        performSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Here you would typically send the search query to a server
            // or perform a client-side search
        }
    }
});