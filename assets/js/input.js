// focus on an input element on page load
var inputElement = document.querySelector('.input--focused .input__control');
inputElement.focus();

// add 'disabled' attribute to the input element
var inputElement = document.querySelector('.input--disabled .input__control');
inputElement.setAttribute('disabled', 'disabled');

// add 'required' attribute to the input element
var inputElement = document.querySelector('.input--required .input__control');
inputElement.setAttribute('required', 'required');
