
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
        const inputControl=element.parentElement;
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
        var allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i; 

        if(titleValue ===''){
            setError(title,"please fill in a title")
        }
        else if(!titleValue.match(regex)){
            setError(title,"Title must only contain letters")
        }
        else{
            setSuccess(title);
        }
        if(blogValue===''){
            setError(blogText,"Add content for the blog,field can't be empty!")   
        }
        else{
            setSuccess(blogText);
        }
        if(imageValue!==''){
            if (!allowedExtensions.exec(imageValue)) {
               setError(image,'Invalid file type, please choose an image(.jpg,.jpeg,.png,.gif)');
                imageValue.innerHTML = '';
                // return false;
            }
            else
            {
             
                // Image preview
                if (image.files && image.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'card-image').innerHTML =
                            '<img src="' + e.target.result
                            + '" style="height:150px;width:180px"/>';
                    };
                     
                    reader.readAsDataURL(image.files[0]);
                }
            }
       
    }
  }  });
    
    