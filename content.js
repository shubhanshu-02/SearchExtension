document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();  // Prevent typing '/' in the page
        let searchBar = findSearchBar() || triggerSearchBar();
        if (searchBar) {
            searchBar.focus();
        }
    }
});

function findSearchBar() {
    let searchBar = document.querySelector(
        'input[type="search"], input[type="text"], input[type="url"], ' +
        'input[name="q"], input[name*="search"], input[id*="search"], input[placeholder*="Search"], ' +
        'input[placeholder*="search"], input[title*="Search"], ' +
        'textarea[placeholder*="Message ChatGPT"]' 
    );

    if (!searchBar) {
        let forms = document.querySelectorAll('form');
        forms.forEach((form) => {
            if (!searchBar && form.querySelector('button[type="submit"], input[type="submit"]')) {
                searchBar = form.querySelector('input[type="text"], input[type="search"], input[type="url"], textarea');
            }
        });
    }

    return searchBar;
}

function triggerSearchBar() {
    let searchButton = document.querySelector('button[aria-label*="search"], button[title*="Search"]');
    if (searchButton) {
        searchButton.click(); 
        return findSearchBar();
    }
    return null;
}
