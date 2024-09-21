document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();  // Prevent typing '/' in the page
        let searchBar = findSearchBar() || triggerSearchBar();
        if (searchBar) {
            searchBar.focus();
            console.log("input check");
        }
    }
});
function findSearchBar() {
    let searchBar = document.querySelector(
        'input[type="search"], input[type="text"], input[type="url"], ' +
        'input[aria-label*="Search"], input[placeholder*="Search"], input[title*="Search"], ' +
        'textarea[aria-label*="Search"], textarea[placeholder*="Search"]'
    );

    if (!searchBar) {
        // Fallback to forms with search buttons
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
    let searchButton = document.querySelector('button[aria-label*="search"], button[title*="Search"], ' +
                                              'button[aria-label*="Search mail"], button[title*="Search mail"]');  // Gmail example
    if (searchButton) {
        searchButton.click(); 
        return findSearchBar();
    }
    return null;
}
