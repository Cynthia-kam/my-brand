
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const mess = document.getElementById('message');
    const success = document.getElementById('success-signup');


    window.addEventListener('load', () => {
        div = document.getElementById('blogsCardsDiv')
        var i = 0;
        // Savedblogs = JSON.parse(localStorage.getItem('blogs')) || [];
        fetch('https://pink-thankful-oyster.cyclic.app/blogs')
            .then(response => response.json())
            .then(blogs => {
                console.log(blogs)
                blogs.data.forEach((element, index) => {
                    let content = document.createElement('div');
                    content.classList.add('card1');
                    content.innerHTML = `
                         <img src="${element.image}" alt="blog" style="width:100%">
                         <p class="title" id="$">${(element.title)}</p>
                         <a href="#"><i class="fa fa-thumbs-up">likes</i></a>
                         <a href="#"><i class="fa fa-eye">views</i></a>
                         <p><button id="${(element._id)}" class="readMore">Read more</button></p>`
    
                    div.appendChild(content)
                    i++;
    
                    var ButtonReadMore = document.querySelectorAll(".readMore")
                    var ParagraphTitle = document.querySelectorAll('.title')
                    console.log(ButtonReadMore.length)
                    for (let i = 0; i < ButtonReadMore.length; i++) {
                        ButtonReadMore[i].addEventListener('click', function () {
                            var id =  this.getAttribute("id");
                            localStorage.setItem('ToReadMore',id)
                            window.location = '/BlogView.html'
                        });
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
    })

    form.addEventListener('submit', e => {
        e.preventDefault();
        //validateInputs();
        sendMessage();
    });



    const setError = (element, message) => {
        inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    const setSuccess = element => {

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
        const nameValue=fname.value;
        const emailValue = email.value;
        const messageValue = mess.value;
        
        if (emailValue === '') {
            setError(email, "email is required")
        }
        else if (!isValidEmail(emailValue)) {
            setError(email, "provide a valid email address")
        }
        else {
            setSuccess(email);
        }
        if (messageValue === '') {
            setError(mess, "please write something")
        }
        else {
            setSuccess(mess);
        }

    }

    const sendMessage = () => {
        const nameValue= fname.value;
        const emailValue = email.value;
        const messageValue = mess.value;

        if (email.value === '' || mess.value === '' || !isValidEmail(email.value)) {
            validateInputs();
        }
        else {
           
            const data = { fullname:nameValue, email:emailValue,content:messageValue };
            fetch('https://pink-thankful-oyster.cyclic.app/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)  
            })
                .then((response) => 
                response.json()
                    // console.log (response)
                )
            .then((data) => {
             console.log(data.message)
             success.style.display='block'
             success.innerText=data.message
             mess.value=''
             email.value=''
             fname.value=''

            })

        }

    }
});

