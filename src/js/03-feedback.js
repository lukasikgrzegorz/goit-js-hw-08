import _throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const data = {};


// Check local storage

if (localStorage.getItem(KEY)) { 
    let dataLocal = JSON.parse(localStorage.getItem(KEY));
    form.email.value = dataLocal.email;
    form.message.value = dataLocal.message;
};

// Listeners

form.addEventListener('input', _throttle((e) => {
    
    data[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data)); 
    console.log(localStorage.getItem(KEY));   

}, 500));

//submit





