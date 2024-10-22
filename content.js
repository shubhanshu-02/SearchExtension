document.addEventListener('keydown', function(event) {
    let activeElement = document.activeElement;
    
    if (event.key === '/' && !isTyping(activeElement)) {
        let searchBar = findSearchBar() || triggerSearchBar();
        if (searchBar) {
            event.preventDefault(); 
            searchBar.focus();
        }
    }
});

function isTyping(element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.isContentEditable;
}

function findSearchBar() {
    let searchBar = document.querySelector(
        'input[type="search"], input[aria-label*="Search"], input[placeholder*="Search"], input[title*="Search"], ' +
        'input[type="text"], input[type="url"], input[class*="search"], input[id*="search"], ' +
        'form[aria-label*="Search"], form[title*="Search"], form[role="search"], form[class*="search"], ' +
        'div[role="search"], section[role="search"]'
      );
      

    console.log(searchBar);
    return searchBar;
}

function triggerSearchBar() {
    let searchButton = document.querySelector(
        'button[aria-label*="search"], button[title*="Search"], ' +
        'a[aria-label*="Search"] button, a[title*="Search"] button, ' +
        'div[aria-label*="search"] button, div[title*="Search"] button, ' +
        'span[aria-label*="Search"] button, span[title*="Search"] button'
    );

    if (searchButton) {
        searchButton.click(); 
        return findSearchBar();  
    }
    return null;
}
