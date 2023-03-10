document.addEventListener("DOMContentLoaded", function(event) { 
    const titleOfBlog=document.getElementById('blog-title')
    const bodyOfBlog=document.getElementById('blogtext')
    let  imageOfBlog=document.getElementById('image-of-blog')
    const image=document.getElementById('image')

    const toupdateID=localStorage.getItem('ToUpdate')
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
            titleOfBlog.value=blog.data.title
             bodyOfBlog.value=blog.data.content
            imageOfBlog.src=blog.data.image
        })
    

    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data={title:titleOfBlog.value,content:bodyOfBlog.value,image:image.scr}
        fetch(`https://pink-thankful-oyster.cyclic.app/blogs/${toupdateID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
            
        })
        
            .then((response) => 
            response.json()
                // console.log (response)
            )
        .then((blog) => {
            alert(blog.message);
            titleOfBlog.value=''
            bodyOfBlog.value=''
            imageOfBlog.src=''
            

        })
        .catch(error => alert(error))
        console.log(error)

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
       
        
        
    })


//     targetBlog.title="remedy"
//    localStorage.setItem('blogs',JSON.stringify(blogs))
})