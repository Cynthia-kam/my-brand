document.addEventListener("DOMContentLoaded", function (event) {
    let titleOfBlog = document.getElementById('blog-title')
    let authorOfBlog = document.getElementById('blog-author')
    let bodyOfBlog = document.getElementById('blogtext')
    let imageOfBlog = document.getElementById('image-of-blog')
    let image = document.getElementById('image')

    const toupdateID = localStorage.getItem('ToUpdate')
    fetch(`https://pink-thankful-oyster.cyclic.app/blogs/${toupdateID}`, {
        headers: {
            "Content-Type": "application/json"
        },
    })

        .then((response) =>
            response.json()
            // console.log (response)

        )
        .then((blog) => {
            console.log(blog.data)
            titleOfBlog.value = blog.data.title
            bodyOfBlog.value = blog.data.content
            authorOfBlog.value = blog.data.author
            imageOfBlog.src = blog.data.image
        })


    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        // const imageFile = document.getElementById('image').files[0];
        // const reader = new FileReader();
        // reader.addEventListener('load', () => {
        //     const image = reader.result;
        //     localStorage.setItem('image', image);

        //     const blogImage = localStorage.getItem('image');
            const formData = new FormData();
            
            // formData.append('image', blogImage);
            // formData.append('title', titleOfBlog.value);
            // formData.append('author', authorOfBlog.value);
            // formData.append('content', bodyOfBlog.value);
            // console.log(formData.get('image'));
            // console.log(formData.get('title'));
            // console.log(formData.get('author'));
            // console.log(formData.get('content'));
             let data = { title: titleOfBlog.value, content: bodyOfBlog.value, author:authorOfBlog.value,image:''}
             console.log(data)
            fetch(`https://pink-thankful-oyster.cyclic.app/blogs/${toupdateID}`, {
                method: "PUT",
                headers: {

                    "Authorization": `Bearer ${token}`,
                   // "Content-Type": "multipart/form-data",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                //body: formData

            })

                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Failed to update blog.');
                    }
                }

                )
                .then((blog) => {
                    document.getElementById("success-signup").style.display='block';
                    document.getElementById("success-signup").innerText=blog.message
                    titleOfBlog.value = ''
                    bodyOfBlog.value = ''
                    imageOfBlog.src = ''


                })
                .catch(error => console.log(error))

       // })
       // reader.readAsDataURL(imageFile);

    })
    // const blogs = JSON.parse(localStorage.getItem('blogs'))||[];
    // const toupdateID=localStorage.getItem('ToUpdate')
    // let targetBlog= blogs.find(blogs=>blogs.blogId==toupdateID);
    // var reader = new FileReader()
    // reader.addEventListener('load', function () {
    // targetBlog.title=titleOfBlog.value
    // targetBlog.body=bodyOfBlog.value
    // targetBlog.image=reader.result;
    // localStorage.setItem('blogs',JSON.stringify(blogs))
    // })
    // reader.readAsDataURL(image.files[0])

    //     targetBlog.title="remedy"
    //    localStorage.setItem('blogs',JSON.stringify(blogs))
})