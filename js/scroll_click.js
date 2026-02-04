function toggleScroll() {
    var container = document.querySelector('.scroll-container');
    // Toggle between display none and flex
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'flex'; // Show the container
    } else {
        container.style.display = 'none'; // Hide the container
    }
}