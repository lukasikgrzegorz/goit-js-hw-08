import _throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const data = {};

const email = document.querySelector('input');
const message = document.querySelector('textarea');

email.addEventListener('input', _throttle((e) => {
    
    data.email = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data)); 
    console.log(localStorage.getItem(KEY));   

}, 500));

message.addEventListener('input', _throttle((e) => {
    
    data.message = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data));  
    console.log(localStorage.getItem(KEY)); 

}, 500));



