document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").onsubmit = function(event) {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Sanitize user input to prevent XSS
        firstName = sanitizeInput(firstName);
        lastName = sanitizeInput(lastName);
        email = sanitizeInput(email);
        password = sanitizeInput(password);
        confirmPassword = sanitizeInput(confirmPassword);

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            event.preventDefault(); // Prevent form submission
        }

        // Additional validation can be added here

        // Submit the form if all checks pass
        // return true;
    };
});

// Function to sanitize user input
function sanitizeInput(input) {
    // Replace HTML characters with their encoded equivalents
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
