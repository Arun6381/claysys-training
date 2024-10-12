document.addEventListener("DOMContentLoaded", function() {
  // Array to store user data
  const users = [];

  // Function to validate the email field
  function validateEmail() {
    const email = document.getElementById("email").value;
    const isValid =
      email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Show or hide the error message based on validity
    if (!isValid) {
      document.getElementById("email-err").textContent =
        "Invalid email format.";
      document.getElementById("email-err").style.display = "block";
      document.getElementById("email").classList.remove("valid");
      document.getElementById("email").classList.add("invalid");
    } else {
      document.getElementById("email-err").style.display = "none";
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").classList.add("valid");
    }

    return isValid;
  }

  // Function to validate the password field
  function validatePassword() {
    const password = document.getElementById("password").value;
    const isValid =
      password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    // Show or hide the error message based on validity
    if (!isValid) {
      document.getElementById("password-err").textContent =
        "Password must be at least 8 characters long and contain letters and numbers.";
      document.getElementById("password-err").style.display = "block";
      document.getElementById("password").classList.remove("valid");
      document.getElementById("password").classList.add("invalid");
    } else {
      document.getElementById("password-err").style.display = "none";
      document.getElementById("password").classList.remove("invalid");
      document.getElementById("password").classList.add("valid");
    }

    return isValid; // Return the validation result
  }

  // Event handler for validating fields on keyup and focusout
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document.getElementById("email").addEventListener("focusout", validateEmail);
  document
    .getElementById("password")
    .addEventListener("keyup", validatePassword);
  document
    .getElementById("password")
    .addEventListener("focusout", validatePassword);

  // Event handler for form submission
  document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      users.push({
        email,
        password,
      });

      console.log("====================================");
      console.log(users);
      console.log("====================================");
      document.getElementById("success").style.display = "block";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("total-err").style.display = "none";

      // Hide the success message after 2 seconds
      setTimeout(function() {
        document.getElementById("success").style.display = "none";
      }, 2000);
    } else {
      document.getElementById("total-err").textContent =
        "Both fields are required";
      document.getElementById("total-err").style.display = "block";
    }

    document.getElementById("email-err").style.display = "none";
    document.getElementById("password-err").style.display = "none";
  });
});
