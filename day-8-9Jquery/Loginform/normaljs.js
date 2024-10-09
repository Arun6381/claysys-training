document.addEventListener("DOMContentLoaded", function() {
  // Array to store user data
  const users = [];

  // Function to validate the email field
  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailErr = document.getElementById("email-err");
    const email = emailInput.value;
    const isValid =
      email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Toggle CSS classes based on validity
    emailInput.classList.toggle("invalid", !isValid);
    emailInput.classList.toggle("valid", isValid);
    // Show or hide the error message
    emailErr.textContent = isValid ? "" : "Invalid email format.";
    emailErr.style.display = isValid ? "none" : "block";

    return isValid; // Return the validation result
  }

  // Function to validate the password field
  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordErr = document.getElementById("password-err");
    const password = passwordInput.value;
    const isValid =
      password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    // Toggle CSS classes based on validity
    passwordInput.classList.toggle("invalid", !isValid);
    passwordInput.classList.toggle("valid", isValid);
    // Show or hide the error message
    passwordErr.textContent = isValid
      ? ""
      : "Password must be at least 8 characters long and contain letters and numbers.";
    passwordErr.style.display = isValid ? "none" : "block";

    return isValid; // Return the validation result
  }

  // Event handler for validating fields on keyup
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document
    .getElementById("password")
    .addEventListener("keyup", validatePassword);

  // Event handler for form submission
  document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Validate both fields on form submission
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check if both fields are valid
    if (isEmailValid && isPasswordValid) {
      // If valid, push user data to the users array
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      users.push({ email, password });

      console.log("====================================");
      console.log(users); // Log the users array
      console.log("====================================");
      document.getElementById("success").style.display = "block"; // Show success message

      // Clear the input fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("total-err").style.display = "none"; // Hide total error message on successful submission
    } else {
      // Show total error message if fields are invalid
      document.getElementById("total-err").textContent =
        "Both fields are required";
      document.getElementById("total-err").style.display = "block";
    }

    // Hide individual error messages if fields are valid
    document.getElementById("email-err").style.display = "none";
    document.getElementById("password-err").style.display = "none";
  });
});
