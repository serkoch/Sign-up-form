const form = document.querySelector('form');
const newPassword = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('#error');

form.addEventListener('submit', function (e) {
  if (newPassword.value !== confirmPassword.value) {
    e.preventDefault();
    error.style.visibility = 'visible';
  } else {
    error.style.visibility = 'hidden';
  }
});

confirmPassword.addEventListener('input', function () {
  if (newPassword.value === confirmPassword.value) {
    error.style.visibility = 'hidden';
  } else {
    error.style.visibility = 'visible';
  }
});

function revealPass() {
  if (newPassword.type === 'password') {
    newPassword.type = 'text';
  } else if (confirmPassword === 'password') {
    confirmPassword.type = 'text';
  } else {
    newPassword.type = 'password';
    confirmPassword.type = 'password';
  }
}



newPassword.addEventListener('focus', function () {
  newPassword.type = 'text';
});
newPassword.addEventListener('blur', function () {
  newPassword.type = 'password';
});

confirmPassword.addEventListener('focus', function () {
  confirmPassword.type = 'text';
});
confirmPassword.addEventListener('blur', function () {
  confirmPassword.type = 'password';
});