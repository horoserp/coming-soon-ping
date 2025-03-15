const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

email.addEventListener("invalid", postError);
email.addEventListener("change", clearError);

function postError() {
  email.classList.add("error");
  if (email.value === "") {
    errorMessage.innerHTML = "Required!";
  } else {
    console.log("Error");
    errorMessage.innerHTML = "Please provide a valid email address";
  }
}

function clearError() {
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
