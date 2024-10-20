function uncheck(checkbox, groupName) {
    var checkboxes = document.getElementsByName(groupName);

    checkboxes.forEach(function (cb) {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
  }
function validateForm() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var studentid = document.getElementById("studentid").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;

  if (firstname === "") {
    alert("Please fill in the First Name field");
    return false; // Prevent form submission
  }

  if (lastname === "") {
    alert("Please fill in the Last Name field");
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

  if (course === "") {
    alert("Please fill in the Course field");
    return false; 
  }
  //for checkbox
  var degreeCheckbox = document.getElementById("Degree");
  var mastersCheckbox = document.getElementById("Masters");
  var phdCheckbox = document.getElementById("PhD");

  if (!(degreeCheckbox.checked || mastersCheckbox.checked || phdCheckbox.checked)) {
    alert("Please select at least one Study Level");
    return false;
  }
  alert("Sign Up Successful!"); 
  return true; 
}

function handleFormSubmission() {
	window.location.href = "home.html"; 
	return false
	}
