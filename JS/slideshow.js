// Initialize slideIndex to track the current slide being displayed
let slideIndex = 0;

// Call the showSlides function to start the slideshow
showSlides();

// Function to display slides and control the slideshow
function showSlides() {
  let i;
  // Get all elements with the class name "mySlides" representing the slides
  let slides = document.getElementsByClassName("mySlides");
  
  // Get all elements with the class name "dot" representing the slide indicators
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides by setting their display property to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  //Increment slideIndex to move to the next slide
  slideIndex++;
  
  //If the slideIndex exceeds the total number of slides, reset it to 1 to start from the beginning
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
 
  //Remove the "active" class from all slide indicators (dots)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  //Display the current slide by setting its display property to "block"
  slides[slideIndex - 1].style.display = "block";  
  
  //Add the "active" class to the current slide indicator (dot) to highlight the active slide
  dots[slideIndex - 1].className += " active";
  
  //Call the showSlides function recursively after 4 seconds to change the slide automatically
  setTimeout(showSlides, 4000); //Change image every 4 seconds
}
