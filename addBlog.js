
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const title = document.getElementById('title');
    const image= document.getElementById('image');
    const blogText=document.getElementById('blogtext');
    const cardImage=document.getElementById('card-image');
    
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
    
    const validateInputs=()=>{
        let titleValue=title.value.trim();
        let imageValue=image.value.trim();
        let blogValue=blogText.value.trim();
        var regex=/^[a-zA-Z]+$/;
        if(titleValue ===''){
            setError(title,"blog has to have a title,please fill in a title")
        }
        else if(!titleValue.match(regex)){
            setError(title,"Title must only contain letters")
        }
        else{
            setSuccess(title);
        }
        if(blogValue===''){
            setError(blogText,"This field can't be emoty!")   
        }
        else{
            setSuccess(blogText);
        }
       
    }
    });
    
    