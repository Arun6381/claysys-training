$(document).ready(function() {
  // Array to store user data
  const users = [];

  // Function to validate the email field
  function validateEmail() {
    const email = $("#email").val();
    const isValid =
      email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Add or remove 'invalid' and 'valid' classes based on validity
    if (isValid) {
      $("#email").removeClass("invalid");
      $("#email").addClass("valid");
    } else {
      $("#email").removeClass("valid");
      $("#email").addClass("invalid");
    }

    // Show or hide the error message based on validity
    if (!isValid) {
      $("#email-err").text("Invalid email format.");
      $("#email-err")[0].style.display = "block";
    } else {
      $("#email-err")[0].style.display = "none";
    }

    return isValid; // Return the validation result
  }

  // Function to validate the password field
  function validatePassword() {
    const password = $("#password").val();
    const isValid =
      password && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    // Add or remove 'invalid' and 'valid' classes based on validity
    if (isValid) {
      $("#password").removeClass("invalid");
      $("#password").addClass("valid");
    } else {
      $("#password").removeClass("valid");
      $("#password").addClass("invalid");
    }

    // Show or hide the error message based on validity
    if (!isValid) {
      $("#password-err").text(
        "Password must be at least 8 characters long and contain letters and numbers."
      );
      $("#password-err")[0].style.display = "block";
    } else {
      $("#password-err")[0].style.display = "none";
    }

    return isValid; // Return the validation result
  }

  // Event handler for validating fields on keyup
  $("#email").on("keyup", validateEmail);
  $("#password").on("keyup", validatePassword);

  // Event handler for form submission
  $("#login-form").on("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      const email = $("#email").val();
      const password = $("#password").val();
      users.push({ email, password });

      console.log("====================================");
      console.log(users);
      console.log("====================================");
      $("#success")[0].style.display = "block";
      $("#email").val("");
      $("#password").val("");
      $("#total-err")[0].style.display = "none";
      //using this we disable the success message to display none after 2 second
      setTimeout(function() {
        $("#success")[0].style.display = "none";
      }, 2000);
    } else {
      $("#total-err").text("Both fields are required");
      $("#total-err")[0].style.display = "block";
    }

    $("#email-err")[0].style.display = "none";
    $("#password-err")[0].style.display = "none";
  });
});
