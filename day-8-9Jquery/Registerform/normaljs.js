document.addEventListener("DOMContentLoaded", function() {
  var users = [];

  // Function to validate first name
  function validateFirstName() {
    const firstname = document.getElementById("firstname").value;
    const errorElement = document.getElementById("firstname-err");
    if (!firstname) {
      errorElement.textContent = "First name is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate last name
  function validateLastName() {
    const lastname = document.getElementById("lastname").value;
    const errorElement = document.getElementById("lastname-err");
    if (!lastname) {
      errorElement.textContent = "Last name is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate email
  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorElement = document.getElementById("email-err");
    if (!email || !emailPattern.test(email)) {
      errorElement.textContent = "Invalid email format.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate password
  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errorElement = document.getElementById("password-err");
    if (!password || !passwordPattern.test(password)) {
      errorElement.textContent =
        "Password must be at least 8 characters long and contain letters and numbers.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate confirm password
  function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorElement = document.getElementById("confirm-password-err");
    if (!confirmPassword || password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate phone number
  function validatePhone() {
    const phone = document.getElementById("phone-number").value;
    const phonePattern = /^\d{10}$/;
    const errorElement = document.getElementById("phone-err");
    if (!phone || !phonePattern.test(phone)) {
      errorElement.textContent = "Phone number must be 10 digits.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate gender
  function validateGender() {
    const gender = document.querySelector("input[name='gender']:checked");
    const errorElement = document.getElementById("gender-err");
    if (!gender) {
      errorElement.textContent = "Please select a gender.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate date of birth
  function validateDOB() {
    const dob = document.getElementById("dob").value;
    const errorElement = document.getElementById("dob-err");
    if (!dob) {
      errorElement.textContent = "Date of Birth is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate address
  function validateAddress() {
    const address = document.getElementById("address").value;
    const errorElement = document.getElementById("address-err");
    if (!address) {
      errorElement.textContent = "Address is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate state
  function validateState() {
    const state = document.getElementById("state").value;
    const errorElement = document.getElementById("state-err");
    if (!state) {
      errorElement.textContent = "State is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate city
  function validateCity() {
    const city = document.getElementById("city").value;
    const errorElement = document.getElementById("city-err");
    if (!city) {
      errorElement.textContent = "City is required.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Function to validate username
  function validateUsername() {
    const username = document.getElementById("username").value;
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
    const errorElement = document.getElementById("user-err");
    if (!username || !usernamePattern.test(username)) {
      errorElement.textContent =
        "Username must be between 3 and 15 characters.";
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  // Attach onkeyup events for real-time validation
  document
    .getElementById("firstname")
    .addEventListener("keyup", validateFirstName);
  document
    .getElementById("lastname")
    .addEventListener("keyup", validateLastName);
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document
    .getElementById("password")
    .addEventListener("keyup", validatePassword);
  document
    .getElementById("confirm-password")
    .addEventListener("keyup", validateConfirmPassword);
  document
    .getElementById("phone-number")
    .addEventListener("keyup", validatePhone);
  document
    .getElementById("username")
    .addEventListener("keyup", validateUsername);

  // Handle form submission
  document
    .getElementById("register-form")
    .addEventListener("submit", function(e) {
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
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector("input[name='gender']:checked")
          .value;
        const phone = document.getElementById("phone-number").value;
        const address = document.getElementById("address").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;
        const username = document.getElementById("username").value;

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
    const state = document.getElementById("state").value;
    const cities = {
      "tamil nadu": ["Chennai", "Coimbatore", "Madurai"],
      kerala: ["Kochi", "Trivandrum", "Calicut"],
      karnataka: ["Bangalore", "Mysore", "Mangalore"],
    };

    const citySelect = document.getElementById("city");
    citySelect.innerHTML = ""; // Clear existing options

    if (cities[state]) {
      cities[state].forEach(function(city) {
        const option = document.createElement("option");
        option.value = city.toLowerCase();
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  }

  // Attach change event to the state dropdown
  document.getElementById("state").addEventListener("change", updateCities);
});
