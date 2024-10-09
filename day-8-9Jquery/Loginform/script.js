$(document).ready(function() {
  // Array to store user data
  const users = [];

  // Function to validate the email field
  function validateEmail() {
    const email = $("#email").val();
    const isValid =
      email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Toggle CSS classes based on validity
    $("#email")
      .toggleClass("invalid", !isValid)
      .toggleClass("valid", isValid);
    // Show or hide the error message
    $("#email-err")
      .text(isValid ? "" : "Invalid email format.")
      .toggle(!isValid);

    return isValid; // Return the validation result
  }

  // Function to validate the password field
  function validatePassword() {
    const password = $("#password").val();
    const isValid =
      password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    // Toggle CSS classes based on validity
    $("#password")
      .toggleClass("invalid", !isValid)
      .toggleClass("valid", isValid);
    // Show or hide the error message
    $("#password-err")
      .text(
        isValid
          ? ""
          : "Password must be at least 8 characters long and contain letters and numbers."
      )
      .toggle(!isValid);

    return isValid; // Return the validation result
  }

  // Event handler for validating fields on keyup
  $("#email").on("keyup", validateEmail);
  $("#password").on("keyup", validatePassword);

  // Event handler for form submission
  $("#login-form").on("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Validate both fields on form submission
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check if both fields are valid
    if (isEmailValid && isPasswordValid) {
      // If valid, push user data to the users array
      const email = $("#email").val();
      const password = $("#password").val();
      users.push({ email, password });

      console.log("====================================");
      console.log(users); // Log the users array
      console.log("====================================");
      $("#success").show(); // Show success message

      // Clear the input fields
      $("#email").val("");
      $("#password").val("");
      $("#total-err").hide(); // Hide total error message on successful submission
    } else {
      // Show total error message if fields are invalid
      $("#total-err")
        .text("Both fields are required")
        .show();
    }

    // Hide individual error messages if fields are valid
    $("#email-err, #password-err").hide();
  });
});
