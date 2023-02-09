
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const mess=document.getElementById('message');
    
    
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
        let emailValue=email.value.trim();
        let messageValue=mess.value.trim();
        if(emailValue ===''){
            setError(email,"email is required")
        }
        else if(!isValidEmail(emailValue)){
            setError(email,"provide a valid email address")
        }
        else{
            setSuccess(email);
        }
        if(messageValue===''){
            setError(mess,"please write something")   
        }
        else{
            setSuccess(mess);
        }
       
    }
    });
    
    