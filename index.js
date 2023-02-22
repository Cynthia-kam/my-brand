
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const mess = document.getElementById('message');


    window.addEventListener('load', () => {
        Savedblogs = JSON.parse(localStorage.getItem('blogs')) || [];
        div = document.getElementById('blogsCardsDiv')
        var i =0;
        //if (div.hasChildNodes()) return div.innerHTML = "";
        Savedblogs.forEach((element,index) => {
            let content = document.createElement('div');

            content.innerHTML = `
                 
                 <img src="${element.image}" alt="blog" style="width:100%">
                 <p class="title" id="${(element.blogId)}">${(element.title)}</p>
                 <a href="#"><i class="fa fa-thumbs-up">likes</i></a>
                 <a href="#"><i class="fa fa-eye">views</i></a>
 
                 <p><button id="${i}" class="readMore">Read more</button></p>`

            div.appendChild(content)
            i++;
        });
        
        var ButtonReadMore=document.querySelectorAll('.readMore')
        var ParagraphTitle=document.querySelectorAll('.title')
        for(let i=0;i<ButtonReadMore.length;i++){
            ButtonReadMore[i].addEventListener('click',()=>{
                var id=ButtonReadMore[i].getAttribute("id")
                var TocommentId=ParagraphTitle[i].getAttribute("id")
                console.log(id);
                localStorage.setItem("ToReadMore",id)
                localStorage.setItem("ToComment",TocommentId)
                window.location="/BlogView.html"
            })
        }
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

        if (email.value === '' || mess.value === '' || !isValidEmail(email.value)) {
            validateInputs();
        }
        else {
            messages = JSON.parse(localStorage.getItem('messages')) || [];
            let user = {};
            user.email = email.value
            user.message = mess.value
            messages.push(user);
            const stringMessages = JSON.stringify(messages);
            localStorage.setItem('messages', stringMessages);

        }

    }
});

