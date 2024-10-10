$(document).ready(function() {
  var users = [];
  const today = new Date().toISOString().split("T")[0];
  $("#dob").attr("max", today);

  function validateFirstName() {
    const firstname = $("#firstname").val();
    if (!firstname) {
      $("#firstname-err")
        .text("First name is required.")
        .show();
      $("#firstname").addClass("invalid");
      return false;
    } else {
      $("#firstname-err").hide();
      $("#firstname")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateLastName() {
    const lastname = $("#lastname").val();
    if (!lastname) {
      $("#lastname-err")
        .text("Last name is required.")
        .show();
      $("#lastname").addClass("invalid");
      return false;
    } else {
      $("#lastname-err").hide();
      $("#lastname")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateEmail() {
    const email = $("#email").val();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      $("#email-err")
        .text("Invalid email format.")
        .show();
      $("#email").addClass("invalid");
      return false;
    } else {
      $("#email-err").hide();
      $("#email")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validatePassword() {
    const password = $("#password").val();
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      $("#password-err")
        .text(
          "Password must be at least 8 characters long and contain letters and numbers."
        )
        .show();
      $("#password").addClass("invalid");
      return false;
    } else {
      $("#password-err").hide();
      $("#password")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateConfirmPassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    if (!confirmPassword || password !== confirmPassword) {
      $("#confirm-password-err")
        .text("Passwords do not match.")
        .show();
      $("#confirm-password").addClass("invalid");
      return false;
    } else {
      $("#confirm-password-err").hide();
      $("#confirm-password")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validatePhone() {
    const phone = $("#phone-number").val();
    const phonePattern = /^\d{10}$/;
    if (!phone || !phonePattern.test(phone)) {
      $("#phone-err")
        .text("Phone number must be 10 digits.")
        .show();
      $("#phone-number").addClass("invalid");
      return false;
    } else {
      $("#phone-err").hide();
      $("#phone-number")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

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

  function validateDOB() {
    const dob = $("#dob").val();
    const today = new Date().toISOString().split("T")[0];

    if (!dob) {
      $("#dob-err")
        .text("Date of Birth is required.")
        .show();
      $("#dob").addClass("invalid");
      return false;
    } else if (dob > today) {
      $("#dob-err")
        .text("You cannot select a future date.")
        .show();
      $("#dob").addClass("invalid");
      return false;
    } else {
      $("#dob-err").hide();
      $("#dob")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateAddress() {
    const address = $("#address").val();
    if (!address) {
      $("#address-err")
        .text("Address is required.")
        .show();
      $("#address").addClass("invalid");
      return false;
    } else {
      $("#address-err").hide();
      $("#address")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateState() {
    const state = $("#state").val();
    if (!state) {
      $("#state-err")
        .text("State is required.")
        .show();
      $("#state").addClass("invalid");
      return false;
    } else {
      $("#state-err").hide();
      $("#state")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateCity() {
    const city = $("#city").val();
    if (!city) {
      $("#city-err")
        .text("City is required.")
        .show();
      $("#city").addClass("invalid");
      return false;
    } else {
      $("#city-err").hide();
      $("#city")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  function validateUsername() {
    const username = $("#username").val();
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
    if (!username || !usernamePattern.test(username)) {
      $("#user-err")
        .text("Username must be between 3 and 15 characters.")
        .show();
      $("#username").addClass("invalid");
      return false;
    } else {
      $("#user-err").hide();
      $("#username")
        .removeClass("invalid")
        .addClass("valid");
      return true;
    }
  }

  $("#firstname").on("keyup", validateFirstName);
  $("#lastname").on("keyup", validateLastName);
  $("input[name='gender']").on("change", validateGender);
  $("#dob").on("change", validateDOB);
  $("#email").on("keyup", validateEmail);
  $("#password").on("keyup", validatePassword);
  $("#confirm-password").on("keyup", validateConfirmPassword);
  $("#phone-number").on("keyup", validatePhone);
  $("#username").on("keyup", validateUsername);
  $("#address").on("keyup", validateAddress);
  $("#state").on("change", validateState);
  $("#city").on("change", validateCity);

  $("#register-form").on("submit", function(e) {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isPhoneValid = validatePhone();
    const isGenderValid = validateGender();
    const isDOBValid = validateDOB();
    const isAddressValid = validateAddress();
    const isStateValid = validateAddress();
    const isCityValid = validateCity();
    const isUsernameValid = validateUsername();

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
        Password: password,
      });

      $("#success")[0].style.display = "block";
      console.log("====================================");
      console.log(users);
      console.log("====================================");
      $("#firstname").val("");
      $("#lastname").val("");
      $("#email").val("");
      $("#password").val("");

      $("#confirm-password").val("");
      $("#dob").val("");
      $('input[name="gender"]').prop("checked", false);
      $("#phone-number").val("");
      $("#address").val("");
      $("#state").val("");
      $("#city").val("");
      $("#username").val("");

      setTimeout(function() {
        $("#firstname").removeClass("valid");
        $("#lastname").removeClass("valid");
        $("#email").removeClass("valid");
        $("#password").removeClass("valid");

        $("#confirm-password").removeClass("valid");
        $("#dob").removeClass("valid");

        $("#phone-number").removeClass("valid");
        $("#address").removeClass("valid");
        $("#state").removeClass("valid");
        $("#city").removeClass("valid");
        $("#username").removeClass("valid");
        $("#success")[0].style.display = "none";
      }, 2000);
    }
  });

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

  
  $("#state").on("change", updateCities);
});
