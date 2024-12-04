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
  console.log(newPassword.value);
  console.log(confirmPassword.value);
  if (newPassword.value === confirmPassword.value) {
    error.style.visibility = 'hidden';
  } else {
    error.style.visibility = 'visible';
  }
});
