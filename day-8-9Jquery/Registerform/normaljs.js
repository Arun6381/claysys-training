document.addEventListener("DOMContentLoaded", function() {
  var users = [];
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", today);

  function validateFirstName() {
    const firstname = document.getElementById("firstname").value;
    const firstnameErr = document.getElementById("firstname-err");

    if (!firstname) {
      firstnameErr.textContent = "First name is required.";
      firstnameErr.style.display = "block";
      document.getElementById("firstname").classList.add("invalid");
      return false;
    } else {
      firstnameErr.style.display = "none";
      document.getElementById("firstname").classList.remove("invalid");
      document.getElementById("firstname").classList.add("valid");
      return true;
    }
  }

  function validateLastName() {
    const lastname = document.getElementById("lastname").value;
    const lastnameErr = document.getElementById("lastname-err");

    if (!lastname) {
      lastnameErr.textContent = "Last name is required.";
      lastnameErr.style.display = "block";
      document.getElementById("lastname").classList.add("invalid");
      return false;
    } else {
      lastnameErr.style.display = "none";
      document.getElementById("lastname").classList.remove("invalid");
      document.getElementById("lastname").classList.add("valid");
      return true;
    }
  }

  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailErr = document.getElementById("email-err");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailPattern.test(email)) {
      emailErr.textContent = "Invalid email format.";
      emailErr.style.display = "block";
      document.getElementById("email").classList.add("invalid");
      return false;
    } else {
      emailErr.style.display = "none";
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").classList.add("valid");
      return true;
    }
  }

  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordErr = document.getElementById("password-err");
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!password || !passwordPattern.test(password)) {
      passwordErr.textContent =
        "Password must be at least 8 characters long and contain letters and numbers.";
      passwordErr.style.display = "block";
      document.getElementById("password").classList.add("invalid");
      return false;
    } else {
      passwordErr.style.display = "none";
      document.getElementById("password").classList.remove("invalid");
      document.getElementById("password").classList.add("valid");
      return true;
    }
  }

  function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const confirmPasswordErr = document.getElementById("confirm-password-err");

    if (!confirmPassword || password !== confirmPassword) {
      confirmPasswordErr.textContent = "Passwords do not match.";
      confirmPasswordErr.style.display = "block";
      document.getElementById("confirm-password").classList.add("invalid");
      return false;
    } else {
      confirmPasswordErr.style.display = "none";
      document.getElementById("confirm-password").classList.remove("invalid");
      document.getElementById("confirm-password").classList.add("valid");
      return true;
    }
  }

  function validatePhone() {
    const phone = document.getElementById("phone-number").value;
    const phoneErr = document.getElementById("phone-err");
    const phonePattern = /^\d{10}$/;

    if (!phone || !phonePattern.test(phone)) {
      phoneErr.textContent = "Phone number must be 10 digits.";
      phoneErr.style.display = "block";
      document.getElementById("phone-number").classList.add("invalid");
      return false;
    } else {
      phoneErr.style.display = "none";
      document.getElementById("phone-number").classList.remove("invalid");
      document.getElementById("phone-number").classList.add("valid");
      return true;
    }
  }

  function validateGender() {
    const gender = document.querySelector("input[name='gender']:checked");
    const genderErr = document.getElementById("gender-err");

    if (!gender) {
      genderErr.textContent = "Please select a gender.";
      genderErr.style.display = "block";
      return false;
    } else {
      genderErr.style.display = "none";
      return true;
    }
  }

  function validateDOB() {
    const dob = document.getElementById("dob").value;
    const dobErr = document.getElementById("dob-err");
    const today = new Date();
    const todayFormatted = today.toISOString().split("T")[0];

    if (!dob) {
      dobErr.textContent = "Date of Birth is required.";
      dobErr.style.display = "block";
      document.getElementById("dob").classList.add("invalid");
      return false;
    } else if (dob > todayFormatted) {
      dobErr.textContent = "You cannot select a future date.";
      dobErr.style.display = "block";
      document.getElementById("dob").classList.add("invalid");
      return false;
    } else {
      const dobDate = new Date(dob);
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDifference = today.getMonth() - dobDate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < dobDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        dobErr.textContent = "You must be at least 18 years old.";
        dobErr.style.display = "block";
        document.getElementById("dob").classList.add("invalid");
        return false;
      } else {
        dobErr.style.display = "none";
        document.getElementById("dob").classList.remove("invalid");
        document.getElementById("dob").classList.add("valid");
        return true;
      }
    }
  }

  function validateAddress() {
    const address = document.getElementById("address").value;
    const addressErr = document.getElementById("address-err");

    if (!address) {
      addressErr.textContent = "Address is required.";
      addressErr.style.display = "block";
      document.getElementById("address").classList.add("invalid");
      return false;
    } else {
      addressErr.style.display = "none";
      document.getElementById("address").classList.remove("invalid");
      document.getElementById("address").classList.add("valid");
      return true;
    }
  }

  function validateState() {
    const state = document.getElementById("state").value;
    const stateErr = document.getElementById("state-err");

    if (!state) {
      stateErr.textContent = "State is required.";
      stateErr.style.display = "block";
      document.getElementById("state").classList.add("invalid");
      return false;
    } else {
      stateErr.style.display = "none";
      document.getElementById("state").classList.remove("invalid");
      document.getElementById("state").classList.add("valid");
      return true;
    }
  }

  function validateCity() {
    const city = document.getElementById("city").value;
    const cityErr = document.getElementById("city-err");

    if (!city) {
      cityErr.textContent = "City is required.";
      cityErr.style.display = "block";
      document.getElementById("city").classList.add("invalid");
      return false;
    } else {
      cityErr.style.display = "none";
      document.getElementById("city").classList.remove("invalid");
      document.getElementById("city").classList.add("valid");
      return true;
    }
  }

  function validateUsername() {
    const username = document.getElementById("username").value;
    const usernameErr = document.getElementById("user-err");
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;

    if (!username || !usernamePattern.test(username)) {
      usernameErr.textContent = "Username must be between 3 and 15 characters.";
      usernameErr.style.display = "block";
      document.getElementById("username").classList.add("invalid");
      return false;
    } else {
      usernameErr.style.display = "none";
      document.getElementById("username").classList.remove("invalid");
      document.getElementById("username").classList.add("valid");
      return true;
    }
  }

  document
    .getElementById("firstname")
    .addEventListener("blur", validateFirstName);
  document
    .getElementById("firstname")
    .addEventListener("keyup", validateFirstName);
  document
    .getElementById("lastname")
    .addEventListener("blur", validateLastName);
  document
    .getElementById("lastname")
    .addEventListener("keyup", validateLastName);
  document.getElementById("email").addEventListener("blur", validateEmail);
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document
    .getElementById("password")
    .addEventListener("blur", validatePassword);
  document
    .getElementById("password")
    .addEventListener("keyup", validatePassword);
  document
    .getElementById("confirm-password")
    .addEventListener("blur", validateConfirmPassword);
  document
    .getElementById("confirm-password")
    .addEventListener("keyup", validateConfirmPassword);
  document
    .getElementById("phone-number")
    .addEventListener("blur", validatePhone);
  document
    .getElementById("phone-number")
    .addEventListener("keyup", validatePhone);
  document.querySelectorAll("input[name='gender']").forEach(function(input) {
    input.addEventListener("change", validateGender);
  });
  document.getElementById("dob").addEventListener("blur", validateDOB);
  document.getElementById("address").addEventListener("blur", validateAddress);
  document.getElementById("state").addEventListener("blur", validateState);
  document.getElementById("city").addEventListener("blur", validateCity);
  document
    .getElementById("username")
    .addEventListener("blur", validateUsername);
  document
    .getElementById("username")
    .addEventListener("keyup", validateUsername);

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
        document.getElementById("success").style.display = "b,ock";
        document.getElementById("register-form").reset();
        setTimeout(function() {
          document.getElementById("firstname").classList.remove("valid");
          document.getElementById("lastname").classList.remove("valid");
          document.getElementById("email").classList.remove("valid");
          document.getElementById("password").classList.remove("valid");
          document.getElementById("confirm-password").classList.remove("valid");
          document.getElementById("dob").classList.remove("valid");
          document.getElementById("phone-number").classList.remove("valid");
          document.getElementById("address").classList.remove("valid");
          document.getElementById("state").classList.remove("valid");
          document.getElementById("city").classList.remove("valid");
          document.getElementById("username").classList.remove("valid");
          document.getElementById("success").style.display = "none";
        }, 2000);
      }
    });
});
function updateCities() {
  const state = document.getElementById("state").value;
  const cities = {
    "tamil nadu": ["Chennai", "Coimbatore", "Madurai"],
    kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
    karnataka: ["Bangalore", "Mysore", "Hubli"],
  };

  const citySelect = document.getElementById("city");
  citySelect.innerHTML = "";

  if (cities[state]) {
    cities[state].forEach(function(city) {
      const option = document.createElement("option");
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}