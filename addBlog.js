
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const title = document.getElementById('title');

    const image = document.getElementById('image');
    const blogText = document.getElementById('blogtext');
    const cardImage = document.getElementById('card-image');
    successAddedBlog = document.querySelector('#success-signup');
    previewBlog = document.getElementById('previewBlog');
   

    form.addEventListener('submit', e => {
        e.preventDefault();
        //validateInputs();
        addBlog();

    });
    previewBlog.addEventListener('click', () => {
        window.location = '/BlogPreview.html'
    })
    const setError = (element, message) => {
        const inputControl = element.parentElement;
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


    const validateInputs = () => {
        let titleValue = title.value.trim();
        let imageValue = image.value.trim();
        let blogValue = blogText.value.trim();
        var regex = /^[a-zA-Z]+$/;
        var allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (titleValue === '') {
            setError(title, "please fill in a title")
        }
        // else if(!titleValue.match(regex)){
        //     setError(title,"Title must only contain letters")
        // }
        // else{
        //     setSuccess(title);
        // }
        if (blogValue === '') {
            setError(blogText, "Add content for the blog,field can't be empty!")
        }
        else {
            setSuccess(blogText);
        }
        if (imageValue !== '') {
            if (!allowedExtensions.exec(imageValue)) {
                setError(image, 'Invalid file type, please choose an image(.jpg,.jpeg,.png,.gif)');
                imageValue.innerHTML = '';
                // return false;
            }
            else {

                // Image preview
                if (image.files && image.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        document.getElementById(
                            'card-image').innerHTML =
                            '<img src="' + e.target.result
                            + '" style="height:150px;width:180px"/>';
                    };

                    reader.readAsDataURL(image.files[0]);
                }
            }

        }
    }


   //Saving blog with 'blogs' key
    const addBlog = () => {
       // localStorage.removeItem('blogs')
        var reader = new FileReader()
        blogs = JSON.parse(localStorage.getItem('blogs'))||[];
        //generate random number
        id = Math.floor((Math.random() * 100) + 1);
        //check if the number is not in ls already
        let blogId= blogs.find(blogs=>blogs.id==id);
        while(blogId){
            id = Math.floor((Math.random() * 100) + 1);
        }
        let user = {};
        reader.addEventListener('load', function () {
           
            user.blogId=id
            user.title = title.value;
            user.body = blogText.value;
            user.image = reader.result
            user.status="pending"

           // localStorage.removeItem('blogs')
            blogs.push(user);
            stringMessages = JSON.stringify(blogs);
            localStorage.setItem('blogs', stringMessages);
            
            

        })
        reader.readAsDataURL(image.files[0])
        console.log(id)
        successAddedBlog.style.display = 'block';
       
    }






});

