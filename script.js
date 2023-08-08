// Assignment code here
const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', generatePassword);
const copy_btn = document.querySelector("#copy");
copy_btn.addEventListener('click', copyPassword);

// Write password to the #password input

function generatePassword () {
  let password = "";
  let length = parseInt(length_el.value); // Convert input to integer
  let chars = "";

  chars += uppercase_el.checked ? uppercase_chars : "";
  chars += lowercase_el.checked ? lowercase_chars : "";
  chars += numbers_el.checked ? numbers_chars : "";
  chars += symbols_el.checked ? symbols_chars : "";

  // Limit the password length to be within the range of 8 to 128 characters
  if (length < 8) {
    length = 8;
  } else if (length > 128) {
    length = 128;
  }

  for (let i = 0; i < length; i++) { // Use < instead of <=
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  password_el.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword); // Change to generatePassword

