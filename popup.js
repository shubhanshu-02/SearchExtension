document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "checkSearchBar"}, function(response) {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                updateStatus(false);
            } else {
                updateStatus(response.searchBarFound);
            }
        });
    });
});

function updateStatus(found) {
    const statusMessage = document.getElementById('statusMessage');
    if (found) {
        statusMessage.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Search bar found
        `;
    } else {
        statusMessage.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            No search bar detected
        `;
    }
}