function toggleSections(showId, hideId) {
    var showSection = document.getElementById(showId);
    var hideSection = document.getElementById(hideId);

    if (showSection.style.display === 'none' || showSection.style.display === '') {
        showSection.style.display = 'block';
        hideSection.style.display = 'none';
    } else {
        showSection.style.display = 'none';
        hideSection.style.display = 'block';
    }
}