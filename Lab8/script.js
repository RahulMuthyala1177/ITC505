document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").onsubmit = function(event) {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            event.preventDefault(); // Prevent form submission
        }

        // Additional validation can be added here
    };
});