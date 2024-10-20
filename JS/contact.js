function validateForm() {
  var name = document.getElementById("name").value;
  var studentid = document.getElementById("studentid").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("textarea").value;

  if (name === "") {
    alert("Please fill in the Name field");
    return false; 
  }

  if (studentid === "") {
    alert("Please fill in the Student ID field");
    return false;
  }

  if (contact === "") {
    alert("Please fill in the Contact field");
    return false; 
  }

  if (email === "") {
    alert("Please fill in the Email field");
    return false; 
  }

  // Additional validation for Email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email address");
    return false; 
  }
  
  if (message === "") {
      alert("Please enter your message");
      return false;
    }
  alert("Form submitted successfully!");  
  return true; 
}
function handleFormSubmission() {
	window.location.href = "home.html"; 
	return false
	}
