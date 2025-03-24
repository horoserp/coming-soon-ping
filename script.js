const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

email.addEventListener("invalid", postError);
email.addEventListener("blur", clearError);

function postError() {
  email.required = false;
  email.type = "text";
  email.setSelectionRange(email.value.length, email.value.length);
  email.classList.add("error");
  if (email.value === "") {
    errorMessage.innerHTML = "Required!";
  } else {
    errorMessage.innerHTML = "Please provide a valid email address";
  }
}

function clearError() {
  email.required = true;
  email.type = "email";
  email.classList.remove("error");
  errorMessage.innerHTML = "";
}

function submitForm() {
  alert(
    "Thank you! We will send an email to " +
      email.value +
      " when the site is live!"
  );
}
