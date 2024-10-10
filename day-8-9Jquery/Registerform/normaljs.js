document.addEventListener("DOMContentLoaded", function() {
  var users = [];
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", today);

  function validateFirstName() {
    const firstname = document.getElementById("firstname").value;
    if (!firstname) {
      document.getElementById("firstname-err").textContent =
        "First name is required.";
      document.getElementById("firstname").classList.add("invalid");
      return false;
    } else {
      document.getElementById("firstname-err").style.display = "none";
      document.getElementById("firstname").classList.remove("invalid");
      document.getElementById("firstname").classList.add("valid");
      return true;
    }
  }

  function validateLastName() {
    const lastname = document.getElementById("lastname").value;
    if (!lastname) {
      document.getElementById("lastname-err").textContent =
        "Last name is required.";
      document.getElementById("lastname").classList.add("invalid");
      return false;
    } else {
      document.getElementById("lastname-err").style.display = "none";
      document.getElementById("lastname").classList.remove("invalid");
      document.getElementById("lastname").classList.add("valid");
      return true;
    }
  }

  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-err").textContent =
        "Invalid email format.";
      document.getElementById("email").classList.add("invalid");
      return false;
    } else {
      document.getElementById("email-err").style.display = "none";
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").classList.add("valid");
      return true;
    }
  }

  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || !passwordPattern.test(password)) {
      document.getElementById("password-err").textContent =
        "Password must be at least 8 characters long and contain letters and numbers.";
      document.getElementById("password").classList.add("invalid");
      return false;
    } else {
      document.getElementById("password-err").style.display = "none";
      document.getElementById("password").classList.remove("invalid");
      document.getElementById("password").classList.add("valid");
      return true;
    }
  }

  function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (!confirmPassword || password !== confirmPassword) {
      document.getElementById("confirm-password-err").textContent =
        "Passwords do not match.";
      document.getElementById("confirm-password").classList.add("invalid");
      return false;
    } else {
      document.getElementById("confirm-password-err").style.display = "none";
      document.getElementById("confirm-password").classList.remove("invalid");
      document.getElementById("confirm-password").classList.add("valid");
      return true;
    }
  }

  function validatePhone() {
    const phone = document.getElementById("phone-number").value;
    const phonePattern = /^\d{10}$/;
    if (!phone || !phonePattern.test(phone)) {
      document.getElementById("phone-err").textContent =
        "Phone number must be 10 digits.";
      document.getElementById("phone-number").classList.add("invalid");
      return false;
    } else {
      document.getElementById("phone-err").style.display = "none";
      document.getElementById("phone-number").classList.remove("invalid");
      document.getElementById("phone-number").classList.add("valid");
      return true;
    }
  }

  function validateGender() {
    const gender = document.querySelector("input[name='gender']:checked");
    if (!gender) {
      document.getElementById("gender-err").textContent =
        "Please select a gender.";
      return false;
    } else {
      document.getElementById("gender-err").style.display = "none";
      return true;
    }
  }

  function validateDOB() {
    const dob = document.getElementById("dob").value;
    const today = new Date().toISOString().split("T")[0];
    if (!dob) {
      document.getElementById("dob-err").textContent =
        "Date of Birth is required.";
      document.getElementById("dob").classList.add("invalid");
      return false;
    } else if (dob > today) {
      document.getElementById("dob-err").textContent =
        "You cannot select a future date.";
      document.getElementById("dob").classList.add("invalid");
      return false;
    } else {
      document.getElementById("dob-err").style.display = "none";
      document.getElementById("dob").classList.remove("invalid");
      document.getElementById("dob").classList.add("valid");
      return true;
    }
  }

  function validateAddress() {
    const address = document.getElementById("address").value;
    if (!address) {
      document.getElementById("address-err").textContent =
        "Address is required.";
      document.getElementById("address").classList.add("invalid");
      return false;
    } else {
      document.getElementById("address-err").style.display = "none";
      document.getElementById("address").classList.remove("invalid");
      document.getElementById("address").classList.add("valid");
      return true;
    }
  }

  function validateState() {
    const state = document.getElementById("state").value;
    if (!state) {
      document.getElementById("state-err").textContent = "State is required.";
      document.getElementById("state").classList.add("invalid");
      return false;
    } else {
      document.getElementById("state-err").style.display = "none";
      document.getElementById("state").classList.remove("invalid");
      document.getElementById("state").classList.add("valid");
      return true;
    }
  }

  function validateCity() {
    const city = document.getElementById("city").value;
    if (!city) {
      document.getElementById("city-err").textContent = "City is required.";
      document.getElementById("city").classList.add("invalid");
      return false;
    } else {
      document.getElementById("city-err").style.display = "none";
      document.getElementById("city").classList.remove("invalid");
      document.getElementById("city").classList.add("valid");
      return true;
    }
  }

  function validateUsername() {
    const username = document.getElementById("username").value;
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
    if (!username || !usernamePattern.test(username)) {
      document.getElementById("user-err").textContent =
        "Username must be between 3 and 15 characters.";
      document.getElementById("username").classList.add("invalid");
      return false;
    } else {
      document.getElementById("user-err").style.display = "none";
      document.getElementById("username").classList.remove("invalid");
      document.getElementById("username").classList.add("valid");
      return true;
    }
  }

  document
    .getElementById("firstname")
    .addEventListener("keyup", validateFirstName);
  document
    .getElementById("lastname")
    .addEventListener("keyup", validateLastName);
  document.querySelectorAll("input[name='gender']").forEach((input) => {
    input.addEventListener("change", validateGender);
  });
  document.getElementById("dob").addEventListener("change", validateDOB);
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
  document.getElementById("address").addEventListener("keyup", validateAddress);
  document.getElementById("state").addEventListener("change", validateState);
  document.getElementById("city").addEventListener("change", validateCity);

  document
    .getElementById("register-form")
    .addEventListener("submit", function(e) {
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
      const isStateValid = validateState();
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
        const newUser = {
          firstname: document.getElementById("firstname").value,
          lastname: document.getElementById("lastname").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          dob: document.getElementById("dob").value,
          phone: document.getElementById("phone-number").value,
          gender: document.querySelector("input[name='gender']:checked").value,
          address: document.getElementById("address").value,
          state: document.getElementById("state").value,
          city: document.getElementById("city").value,
          username: document.getElementById("username").value,
        };
        users.push(newUser);
        console.log(users);
        alert("User registered successfully!");
      }
    });
});
