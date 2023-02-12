
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const submit=document.getElementById('submit');
    
    
    form.addEventListener('submit', e=> {
    e.preventDefault();
    validateInputs();
    adduser();
    
    });
    // submit.addEventListener('click',e=>{
    // e.preventDefault();
    // adduser();
    // })

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
        let password2Value=password2.value.trim();

        if(usernameValue ===''){
            setError(username,"Email is required")
        }
        else if(!isValidEmail(usernameValue)){
            setError(username,"provide a valid email address")
        }
        else{
            setSuccess(username);
           
        }
        if(passwordValue===''){
            setError(password,"password can't be empty")   
        }
        else{
            if(password.value.length<8){
                setError(password,"password must have atleast 8 characters")
            }
            setSuccess(password);
        }
        if(password2===''){
            setError(password2,"password field is required")
        }
        else{
            if(passwordValue!==password2Value){
                setError(password2,"password does not match")  
                    }
                    else{
                setSuccess(password2);
                    }
        } 
    }
    const adduser=()=>{
        var usernameValue=username.value.trim();
        var passwordValue=password.value.trim();
        var queries=JSON.parse(localStorage.getItem("user"))
        console.log(queries)
       const user ={
       email:usernameValue,
       password:passwordValue
       };
       queries.push(user);
       var Json= JSON.stringify(queries);
       localStorage.setItem("queries",Json);
       location.reload();
       console.log("user added");
    }
    const togglePassword = document.querySelector('#togglePassword');


  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('bi-eye');
    
});
const togglePassword2 = document.querySelector('#togglePassword2');


  togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('bi-eye');
    
});
    });
    
    