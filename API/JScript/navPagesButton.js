function goToStartPage() { 
    currentPage = 0;
    goPage(currentPage);
}

function goToLastPage() {
    if (currentPage > 0) {  
        currentPage--;
        goPage(currentPage);
    }
}

function goToNextPage() {
    if (currentPage < pageCounter.length) {
        currentPage++;
        goPage(currentPage);
    }
}
