$(document).ready(function() {
  var users = [];

  // Function to validate first name
  function validateFirstName() {
    const firstname = $("#firstname").val();
    if (!firstname) {
      $("#firstname-err")
        .text("First name is required.")
        .show();
      return false;
    } else {
      $("#firstname-err").hide();
      return true;
    }
  }

  // Function to validate last name
  function validateLastName() {
    const lastname = $("#lastname").val();
    if (!lastname) {
      $("#lastname-err")
        .text("Last name is required.")
        .show();
      return false;
    } else {
      $("#lastname-err").hide();
      return true;
    }
  }

  // Function to validate email
  function validateEmail() {
    const email = $("#email").val();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      $("#email-err")
        .text("Invalid email format.")
        .show();
      return false;
    } else {
      $("#email-err").hide();
      return true;
    }
  }

  // Function to validate password
  function validatePassword() {
    const password = $("#password").val();
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      $("#password-err")
        .text(
          "Password must be at least 8 characters long and contain letters and numbers."
        )
        .show();
      return false;
    } else {
      $("#password-err").hide();
      return true;
    }
  }

  // Function to validate confirm password
  function validateConfirmPassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    if (!confirmPassword || password !== confirmPassword) {
      $("#confirm-password-err")
        .text("Passwords do not match.")
        .show();
      return false;
    } else {
      $("#confirm-password-err").hide();
      return true;
    }
  }

  // Function to validate phone number
  function validatePhone() {
    const phone = $("#phone-number").val();
    const phonePattern = /^\d{10}$/;
    if (!phone || !phonePattern.test(phone)) {
      $("#phone-err")
        .text("Phone number must be 10 digits.")
        .show();
      return false;
    } else {
      $("#phone-err").hide();
      return true;
    }
  }

  // Function to validate gender
  function validateGender() {
    const gender = $("input[name='gender']:checked").val();
    if (!gender) {
      $("#gender-err")
        .text("Please select a gender.")
        .show();
      return false;
    } else {
      $("#gender-err").hide();
      return true;
    }
  }

  // Function to validate date of birth
  function validateDOB() {
    const dob = $("#dob").val();
    if (!dob) {
      $("#dob-err")
        .text("Date of Birth is required.")
        .show();
      return false;
    } else {
      $("#dob-err").hide();
      return true;
    }
  }

  // Function to validate address
  function validateAddress() {
    const address = $("#address").val();
    if (!address) {
      $("#address-err")
        .text("Address is required.")
        .show();
      return false;
    } else {
      $("#address-err").hide();
      return true;
    }
  }

  // Function to validate state
  function validateState() {
    const state = $("#state").val();
    if (!state) {
      $("#state-err")
        .text("State is required.")
        .show();
      return false;
    } else {
      $("#state-err").hide();
      return true;
    }
  }

  // Function to validate city
  function validateCity() {
    const city = $("#city").val();
    if (!city) {
      $("#city-err")
        .text("City is required.")
        .show();
      return false;
    } else {
      $("#city-err").hide();
      return true;
    }
  }

  // Function to validate username
  function validateUsername() {
    const username = $("#username").val();
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
    if (!username || !usernamePattern.test(username)) {
      $("#user-err")
        .text("Username must be between 3 and 15 characters.")
        .show();
      return false;
    } else {
      $("#user-err").hide();
      return true;
    }
  }

  // Attach onkeyup events for real-time validation
  $("#firstname").on("keyup", validateFirstName);
  $("#lastname").on("keyup", validateLastName);
  $("#email").on("keyup", validateEmail);
  $("#password").on("keyup", validatePassword);
  $("#confirm-password").on("keyup", validateConfirmPassword);
  $("#phone-number").on("keyup", validatePhone);
  $("#username").on("keyup", validateUsername);

  // Handle form submission
  $("#register-form").on("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Validate all fields before submission
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isPhoneValid = validatePhone();
    const isGenderValid = validateGender();
    const isDOBValid = validateDOB();
    const isAddressValid = validateAddress();
    const isStateValid = validateState();
    const isCityValid = validateCity();
    const isUsernameValid = validateUsername();

    // Submit form if all validations pass
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isPhoneValid &&
      isGenderValid &&
      isDOBValid &&
      isAddressValid &&
      isStateValid &&
      isCityValid &&
      isUsernameValid
    ) {
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var dob = $("#dob").val();
      var gender = $('input[name="gender"]:checked').val();
      var phone = $("#phone-number").val();
      var address = $("#address").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var username = $("#username").val();

      users.push({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        DateofBirth: dob,
        Gender: gender,
        PhoneNumber: phone,
        Address: address,
        State: state,
        City: city,
        UserName: username,
      });

      console.log("====================================");
      console.log(users);
      console.log("====================================");
    }
  });

  // Update cities based on selected state
  function updateCities() {
    const state = $("#state").val();
    const cities = {
      "tamil nadu": ["Chennai", "Coimbatore", "Madurai"],
      kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
      goa: ["Panaji", "Vasco da Gama"],
      "andhra pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
    };

    $("#city")
      .empty()
      .append('<option value="">Select City</option>');
    if (cities[state]) {
      cities[state].forEach((city) =>
        $("#city").append(new Option(city, city))
      );
    }
  }

  // Attach event listener to state select box
  $("#state").on("change", updateCities);
});
