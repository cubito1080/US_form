import * as firebase from "firebase-admin";

const firstNameInput = document.querySelector('input[name="first_name"]');
const lastNameInput = document.querySelector('input[name="last_name"]');


const firstNameError = document.getElementById('first_name_error');
const lastNameError = document.getElementById('last_name_error');


const regex = /^[a-zA-Z\s]*$/;


function validateInput(input, errorElement) {
    if (!regex.test(input.value)) {
        errorElement.textContent = 'Invalid input';
    } else {
        errorElement.textContent = '';
    }
}


firstNameInput.addEventListener('input', function() {
    validateInput(firstNameInput, firstNameError);
});

lastNameInput.addEventListener('input', function() {
    validateInput(lastNameInput, lastNameError);
});




const phoneInput = document.querySelector('input[name="phone"]');
const phoneError = document.getElementById('phone_error');


const phoneRegex = /^[0-9-+:()]*$/;


phoneInput.addEventListener('input', function() {

    if (!phoneRegex.test(this.value)) {

        phoneError.textContent = 'Invalid input';
    } else {

        phoneError.textContent = '';
    }
});



const cityInput = document.querySelector('input[name="city"]');
const cityError = document.getElementById('city_error');


const cityRegex = /^[a-zA-Z\s]*$/;


cityInput.addEventListener('input', function() {

    if (!cityRegex.test(this.value)) {

        cityError.textContent = 'Invalid input';
    } else {

        cityError.textContent = '';
    }
});




document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();


    var firstName = this.elements['first_name'].value;
    var lastName = this.elements['last_name'].value;
    var phone = this.elements['phone'].value;
    var city = this.elements['city'].value;


    if (firstName === '' || lastName === '' || phone === '' || city === '') {
        alert('Por favor, llena todos los campos.');
        return;
    }


    firebase.database().ref('contacts').push({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        city: city
    });

    alert('Datos enviados correctamente.');
});




