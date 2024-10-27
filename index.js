function checkEmailError() {
  const email = document.getElementById("email");

  if (email.validity.valueMissing) {
    addResult("Please enter an Email.");
  } else if (email.validity.typeMismatch) {
    addResult("Not in email format.");
  }
}

function checkCountryError() {
  const country = document.getElementById("country");

  if (country.validity.valueMissing) {
    addResult("Please enter a Country.");
  } else if (country.validity.patternMismatch) {
    addResult("Country not in alphabetical format.");
  }
}

function checkZipCodeError() {
  const zipCode = document.getElementById("zipCode");

  if (zipCode.validity.valueMissing) {
    addResult("Please enter a Zip Code.");
  } else if (zipCode.validity.patternMismatch) {
    addResult("Zip Code not in alphanumerical format.");
  } else if (zipCode.validity.tooShort) {
    addResult('Please enter a Zip Code at least 5 characters long.');
  }
}

function checkPasswordError() {
  const password = document.getElementById("password");

  if (password.validity.valueMissing) {
    addResult("Please enter a Password.");
  } else if (password.validity.tooShort) {
    addResult("Please enter a Password at least 5 characters long.");
  }
}

function checkPasswordConfirmationError() {
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const password = document.getElementById('password');

  if (passwordConfirmation.validity.valueMissing) {
    addResult("Please reenter the Password.");
  } else if (passwordConfirmation.validity.tooShort) {
    addResult("Please enter a Password Confirmation at least 5 characters long.");
  } else if (passwordConfirmation.value !== password.value) {
    addResult("Passwords do not match.");
  }
}

function addResult(text) {
  const textBox = document.getElementById("result");
  const result = document.createTextNode(`${text}`);
  const newLine = document.createElement("br");
  textBox.appendChild(result);
  textBox.appendChild(newLine);
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  const textBox = document.getElementById("result");
  textBox.textContent = "";

  checkEmailError();
  checkCountryError();
  checkZipCodeError();
  checkPasswordError();
  checkPasswordConfirmationError();
});
