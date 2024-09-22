document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();  // Prevent typing '/' in the page
        let searchBar = findSearchBar();
        // || triggerSearchBar();
        if (searchBar) {
            console.log(searchBar);
            searchBar.focus();
            // console.log("input");
        }
    }
});

function findSearchBar() {
    let searchBar = document.querySelector(
        'input[type="search"], input[type="text"], input[type="url"], ' +
        'input[name="q"], input[name*="search"], input[id*="search"], input[placeholder*="Search"], ' +
        'input[placeholder*="Search mail"], input[aria-label*="Search mail"], ' +
        'input[title*="Search"], textarea[placeholder*="Message ChatGPT"]' 
    );
    // console.log(searchBar);

    // Fallback to search for forms if no search bar is found
    if (!searchBar) {
        let forms = document.querySelectorAll('form');
        console.log("inside form");
        forms.forEach((form) => {
            if (!searchBar && form.querySelector('button[type="submit"], input[type="submit"]')) {
                searchBar = form.querySelector('input[type="text"], input[type="search"], input[type="url"], textarea');
            }
        });
    }

    return searchBar;
}

function triggerSearchBar() {
    // Attempt to click the search button if needed
    let searchButton = document.querySelector('button[aria-label*="search"], button[title*="Search"]');
    if (searchButton) {
        searchButton.click(); 
        return findSearchBar();
    }
    return null;
}
