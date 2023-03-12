
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const fullname = document.getElementById('fullname');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const submit = document.getElementById('submit');
    const success = document.getElementById('success-signup');


    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
        adduser();

    });
    // submit.addEventListener('click',e=>{
    // e.preventDefault();
    // adduser();
    // })

    const setError = (element, message) => {
        inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    const setSuccess = element => {
        let Status = false
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = "";
        inputControl.classList.remove('error');
        // inputControl.classList.add('success');
    }
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const validateInputs = () => {
        let fullnameValue = fullname.value.trim();
        let usernameValue = username.value.trim();
        let passwordValue = password.value.trim();
        let password2Value = password2.value.trim();
        if (fullnameValue === '') {
            setError(fullname, "Name is required")
        }
        else {
            setSuccess(fullname);

        }
        if (usernameValue === '') {
            setError(username, "Email is required")
        }
        else if (!isValidEmail(usernameValue)) {
            setError(username, "provide a valid email address")
        }
        else {
            setSuccess(username);

        }
        if (passwordValue === '') {
            setError(password, "password can't be empty")
        }
        else {
            if (password.value.length < 8) {
                setError(password, "password must have atleast 8 characters")
            }
            setSuccess(password);
        }
        if (password2Value === '') {
            setError(password2, "password field is required")
        }
        else {
            if (passwordValue !== password2Value) {
                setError(password2, "password does not match")
            }
            else {
                setSuccess(password2);
            }
        }
    }

    const adduser = () => {
        const fullnameValue = fullname.value;
        const password2Value = password2.value;
        const usernameValue = username.value;
        const passwordValue = password.value;


        if (usernameValue === '' || passwordValue === '' || password2Value === '') {
            validateInputs();
        }
        else if (!isValidEmail(usernameValue)) {
            validateInputs();
        }
        else if (passwordValue !== password2Value) {
            validateInputs();
        }
        else if (fullnameValue === '') {
            validateInputs();
        }
        else {
            const data = { fullname:fullnameValue, email:usernameValue,password:passwordValue, isAdmin: false };
            fetch('https://pink-thankful-oyster.cyclic.app/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
                
            })
            
                .then((response) => 
                response.json(),
                    console.log (response)
                )
            .then((data) => {
                console.log('Data:', data);
                if (data.ok) {
                    success.style.display='block'
                    success.innerText=data.message
                    password.value=''
                    password2.value=''
                } else {
                    alert(data.errors)
                }
            })
            .catch(error)
            console.log(error)
        }
    }

    const togglePassword = document.querySelector('#togglePassword');
    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
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

