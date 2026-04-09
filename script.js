document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let college = document.getElementById("college").value.trim();
  let event = document.getElementById("event").value;
  let message = document.getElementById("message").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("collegeError").innerText = "";
  document.getElementById("genderError").innerText = "";
  document.getElementById("eventError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  }

  // Phone validation
  let phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    document.getElementById("phoneError").innerText = "Phone number is required";
    isValid = false;
  } else if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
    isValid = false;
  }

  // College validation
  if (college === "") {
    document.getElementById("collegeError").innerText = "College name is required";
    isValid = false;
  }

  // Gender validation
  if (!gender) {
    document.getElementById("genderError").innerText = "Please select gender";
    isValid = false;
  }

  // Event validation
  if (event === "") {
    document.getElementById("eventError").innerText = "Please select an event";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Please enter your reason for joining";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("successMsg").innerText = "Registration Successful!";
    document.getElementById("eventForm").reset();
  }
});

