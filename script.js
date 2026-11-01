



 // Get HTML elements
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const hidePassword = document.getElementById("hidePassword");
const form = document.getElementById("registerForm");

// Show password
showPassword.addEventListener("click", function () {
    password.type = "text";

    showPassword.style.display = "none";
    hidePassword.style.display = "block";
});

// Hide password
hidePassword.addEventListener("click", function () {
    password.type = "password";

    hidePassword.style.display = "none";
    showPassword.style.display = "block";
});

// Reset form after submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Registration Successful!");

    form.reset();

    // Make sure password is hidden after reset
    password.type = "password";

    showPassword.style.display = "block";
    hidePassword.style.display = "none";
});   

