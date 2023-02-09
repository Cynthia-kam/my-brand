
document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit=document.getElementById('submit');


form.addEventListener('submit', e=> {
e.preventDefault();
validateInputs();

});
const setError =(element,message)=>{
    inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess=element=>{
    let Status=false
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText="";
    inputControl.classList.remove('error');
    // inputControl.classList.add('success');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs=()=>{
    let usernameValue=username.value.trim();
    let passwordValue=password.value.trim();
    if(usernameValue ===''){
        setError(username,"username is required")
    }
    else if(!isValidEmail(usernameValue)){
        setError(username,"provide a valid email address")
    }
    else{
        setSuccess(username);
    }
    if(passwordValue===''){
        setError(password,"password is required")   
    }
    else{
        setSuccess(password);
    }
   
}
});

