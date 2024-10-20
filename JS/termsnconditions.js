//Get all elements with the class name "accordion" and store them in the variable 'acc'
var acc = document.getElementsByClassName("accordion");
var i;

//Loop through each element with the class name "accordion"
for (i = 0; i < acc.length; i++) {
  //Add a click event listener to each "accordion" element
  acc[i].addEventListener("click", function() {
    //Toggle the "active" class on the clicked element
    this.classList.toggle("active");
    
    //Get the next sibling element of the clicked "accordion" element
    var panel = this.nextElementSibling;
    
    //Check if the panel element has a defined maximum height
    if (panel.style.maxHeight) {
      //If the maxHeight is set, set it to null (collapse the panel)
      panel.style.maxHeight = null;
    } else {
      //If the maxHeight is not set, set it to the scroll height of the panel (expand the panel)
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
