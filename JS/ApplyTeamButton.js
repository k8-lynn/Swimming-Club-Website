document.addEventListener('DOMContentLoaded', function() {
    // Find the button element
    var button = document.querySelector('.button');

    // Attach a click event listener to the button
    button.addEventListener('click', function(event) {
        // Prevent the default behavior (form submission or link following)
        event.preventDefault();

        // Get the URL from the anchor tag's href attribute
        var redirectTo = button.getAttribute('href');

        // Navigate to the specified URL
        window.location.href = redirectTo;
    });
});
