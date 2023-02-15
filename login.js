
document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit=document.getElementById('submit');


form.addEventListener('submit', e=> {
e.preventDefault();
validateInputs();
 loginFunction();

});
const setError =(element,message)=>{
    inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    return true;
}
const setSuccess=element=>{
    
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText="";
    inputControl.classList.remove('error');
    return true;
    // inputControl.classList.add('success');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs=()=>{
    let usernameValue=username.value.trim();
    let passwordValue=password.value.trim();
    let successUsername
    let successPassword
    if(usernameValue ===''){
        setError(username,"username is required")
    }
    else if(!isValidEmail(usernameValue)){
        setError(username,"provide a valid email address")
    }
    else{
     successUsername= setSuccess(username);
    }
    if(passwordValue===''){
        setError(password,"password is required")   
    }
    else{
        successPassword=setSuccess(password);
    }
// if(successUsername&&successPassword){
//     loginFunction();
// }
}
const togglePassword = document.querySelector('#togglePassword');
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('bi-eye');
    
});
function loginFunction(e){
   
    const users=localStorage.getItem('users')||[];
    
    Arrusers=JSON.parse(users)
    // console.log(typeof(Arrusers))
    
    usermail=username.value.trim()
    userpass=password.value.trim()
    const targetUser= Arrusers.find(users=>users.email==usermail);
    if(targetUser&& targetUser.password==userpass){
        window.location="/dashboard.html"
    }
    else if(targetUser&& targetUser.password!=userpass){
        setError(password,"incorrect password")    
    }
    else{
        setError(username,"user not found,try signing up") 
        password.value=''
    }}

});

