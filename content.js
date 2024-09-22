document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        event.preventDefault();  
        let searchBar = findSearchBar() || triggerSearchBar();
        if (searchBar) {
            searchBar.focus();
        }
    }
});

function findSearchBar() {
    let searchBar = document.querySelector(
        'input[type="search"], input[aria-label*="Search"], input[placeholder*="Search"], input[title*="Search"], ' +
        'textarea[aria-label*="Search"], textarea[placeholder*="Search"], textarea[title*="Search"]'
    );

    if (!searchBar) {
        let form = document.querySelector('form:has(button[type="submit"], input[type="submit"])');
        if (form) {
            searchBar = form.querySelector('input[type="text"], input[type="search"], input[type="url"], textarea');
        }
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
