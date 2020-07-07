window.onload = startingForm;

function startingForm() {
  document.getElementById("signup").onsubmit = signUp;
}

function signUp() {
  if (document.getElementById("signup").name.value.length == 0) {
    alert("You must enter a name");
    return false;
  } else if (document.getElementById("signup").email.value.length == 0) {
    alert("You must enter a email");
    return false;
  } else if (document.getElementById("signup").password.value.length == 0) {
    alert("You must enter a password");
    return false;
  } else if (document.getElementById("signup").dob.value.length == 0) {
    alert("You must enter a Date of Birth");
    return false;
  } else return true;
}
