document.addEventListener('DOMContentLoaded', function() {

  var signInButton = document.querySelector('.signin');
  var modalWindow = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');
  var submitButton = document.querySelector('.submit');
  var textField = document.querySelector('#user');
  var passwordField = document.querySelector('#pass');

  // When the user presses the .signin button, display the modal window
  signInButton.addEventListener('click', function() {
  modalWindow.style.display = 'block';
});

  // When the user presses the .close button, hide the modal window
  closeButton.addEventListener('click', function(){
    modalWindow.style.display = 'none';
  });

  // When the user presses the .submit button, add an .error class to both input elements
  submitButton.addEventListener('click', function() {
  textField.classList.add('error');
  passwordField.classList.add('error');

  });
  // When the user puts their cursor in one of the input fields, remove the .error class
  textField.addEventListener('click', function() {
    this.className = "";
  });

  passwordField.addEventListener('click', function() {
    this.className = "";
  });
});
