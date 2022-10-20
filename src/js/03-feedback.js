import _throttle from 'lodash.throttle';

// Variables

const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const data = {};

// Check local storage

if (localStorage.getItem(KEY)) { 
    let dataLocal = JSON.parse(localStorage.getItem(KEY));
    form.email.value = dataLocal.email;
    form.message.value = dataLocal.message;
};

// Inputs listeners

form.addEventListener('input', _throttle((e) => {
    
    data[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data)); 

}, 500));

//submit

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (form.email.value && form.message.value) {
        form.email.value = "";
        form.message.value = "";
        console.log(JSON.parse(localStorage.getItem(KEY))); 
        localStorage.clear();
    }
 
});




