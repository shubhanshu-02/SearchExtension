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
        return element.tagName === 'INPUT' || 
            element.tagName === 'TEXTAREA' || 
            element.isContentEditable;
    }

    function findSearchBar() {
        let searchBar = document.querySelector(
            'input[type="search"], input[type="text"], input[type="url"], ' +
            // 'input[name="q"], input[name*="search"], input[id*="search"], ' +
            'input[placeholder*="Search"], input[title*="Search"] '
            // 'input[class*="search"], ' +
            // 'form[role="search"] input, div[role="search"] input'
        );
        
        
        if (searchBar) {
            console.log('Search bar found:', searchBar);
        } else {
            console.log('No search bar found');
        }

        return searchBar;
    }

    function triggerSearchBar() {
        let searchButton = document.querySelector(
            'a[href*="/search"], ' +
            'button[aria-label*="search"], button[title*="Search"], ' +
            'a[aria-label*="Search"] button, a[title*="Search"] button, ' +
            'div[aria-label*="search"] button, div[title*="Search"] button, ' +
            'span[aria-label*="Search"] button, span[title*="Search"] button'
        );

        if (searchButton) {
            console.log('Search button found:', searchButton);
            searchButton.click(); 
            return findSearchBar();
        } else {
            console.log('No search button found');
        }

        return null;
    }
