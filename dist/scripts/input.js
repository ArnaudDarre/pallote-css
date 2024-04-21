// focus an input element on page load
var inputFocusElement = document.querySelector('.input--focused .input__control');
if (inputFocusElement !== null) {
  inputFocusElement.focus();
}

// add 'disabled' attribute to the input element
var inputDisabledElement = document.querySelector('.input--disabled .input__control');
if (inputDisabledElement !== null) {
  inputDisabledElement.setAttribute('disabled', 'disabled');
}

// add 'required' attribute to the input element
var inputRequiredElement = document.querySelector('.input--required .input__control');
if (inputRequiredElement !== null) {
  inputRequiredElement.setAttribute('required', 'required');
}


// Update disabled and required above to add attributes when used for checkboxes and radios

// Make functional, careful that the other functions still work after
// var checkboxDisabledElement = document.querySelector('.checkbox--disabled .checkbox__control');
// checkboxDisabledElement.setAttribute('disabled', 'disabled');
