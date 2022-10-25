import _throttle from 'lodash.throttle';


const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let data = {};

if (localStorage.getItem(KEY)) { 
    let dataLocal = JSON.parse(localStorage.getItem(KEY));

    if (dataLocal.email) form.email.value = dataLocal.email;
    if (dataLocal.message) form.message.value = dataLocal.message; 
} 

form.addEventListener('input', _throttle((e) => {
    
    if (localStorage.getItem(KEY)) data = JSON.parse(localStorage.getItem(KEY));

    data[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data)); 

}, 500));

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (form.email.value && form.message.value) {
        form.email.value = "";
        form.message.value = "";
        console.log(JSON.parse(localStorage.getItem(KEY))); 
        localStorage.clear();
    }
 
});




