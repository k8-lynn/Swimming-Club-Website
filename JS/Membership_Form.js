function validateForm() {

    document.getElementById('error-message').textContent = '';

    var firstName = validateAndReturn('firstName', 'Please enter your first name.');
    var lastName = validateAndReturn('lastName', 'Please enter your last name.');
    var email = validateAndReturn('email', 'Please enter your email address.');
    var tpNumber = validateAndReturn('tpNumber', 'Please enter your TP number.');
    var notificationType = document.getElementById('notificationType').value;
    var telephone = document.getElementById('telephone').value;
    var swimmerLevel = validateAndReturn('swimmerLevel', 'Please select a swimmer level.');
    var agreeCheckbox = document.getElementById('agree');

    
    if (notificationType === '') {
        document.getElementById('error-message').textContent = 'Please select a notification type.';
        return;
    }

    
    if (notificationType === 'telephone' && telephone === '') {
        document.getElementById('error-message').textContent = 'Please enter your telephone number.';
        return;
    }

    if (notificationType === 'email' && email === '') {
        document.getElementById('error-message').textContent = 'Please enter your email address.';
        return;
    }

    
    var studyLevel = validateAndReturn('studyLevel', 'Please select your study level.');

    if (!agreeCheckbox.checked) {
        document.getElementById('error-message').textContent = 'Please agree to the terms and conditions.';
        return;
    }

    
    alert('Form submitted successfully!');
    window.location.href = "home.html";
}

function validateAndReturn(inputId, errorMessage) {
    var value = document.getElementById(inputId).value;

    if (value === '') {
        document.getElementById('error-message').textContent = errorMessage;
        throw new Error(errorMessage); 
    }

    return value;
}

function clearForm() {
    
    document.getElementById('membershipForm').reset();
    document.getElementById('error-message').textContent = '';
}
