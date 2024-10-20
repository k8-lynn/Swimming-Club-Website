function facebook() {
      window.location.href = "https://www.facebook.com/login";
      }
function google() {
      window.location.href = "https://accounts.google.com/";
    }

    function linkedin() {
      window.location.href = "https://www.linkedin.com/login";
    }

function togglePassword() 
	{
      var passwordInput = document.getElementById("passwordInput");
      var toggleBtn = document.getElementById("toggleBtn");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.src = "view.png"; 
      } else {
        passwordInput.type = "password";
        toggleBtn.src = "hide.png"; 
      }
    }
function validateForm() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("passwordInput").value;

      if (email === "") {
        alert("Please fill in the Email field");
        return false; // Prevent form submission
      }
	  // Additional validation for Email format
 	 var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  		if (!emailRegex.test(email)) {
  	 	 alert("Please enter a valid Email address");
  		 return false; 
 	 	}

      if (password === "") {
        alert("Please fill in the Password field");
        return false; 
      }      
      return true; 
    }	
function handleFormSubmission() {
	window.location.href = "home.html"; 
	return false
	}

